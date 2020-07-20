import React, { useEffect, useState, Fragment } from "react";
import styles from "./Deck.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectDeckInfo,
  addPilesToDeck,
  getDeckDetailsStart,
  getDeckDetailsError,
} from "../reducers";
import { getPile } from "../services";
import { findFullHouseCombinations } from "../../../../utils";
import { Card } from "../services/types";
import { default as CardImage } from "./Card";

const DeckInfo = (props: any) => {
  const { loading, error, piles } = useSelector(selectDeckInfo);
  const [fullHouseComb, setFullHouseComb] = useState<Card[]>([]);
  const dispatch = useDispatch();
  const deckID = props.match.params.id;
  const pileName = process.env.REACT_APP_PILE_NAME;

  useEffect(() => {
    dispatch(getDeckDetailsStart());
    getPile(deckID)
      .then((data: any) => {
        dispatch(addPilesToDeck({ piles: data.piles }));
        return data.piles;
      })
      .then((piles) => {
        if (pileName) {
          return setFullHouseComb(
            findFullHouseCombinations(piles[pileName].cards)
          );
        }
        return;
      })
      .catch(() =>
        dispatch(
          getDeckDetailsError({
            error: "An error occured while retrieving data",
          })
        )
      );
  }, [deckID, dispatch, pileName, setFullHouseComb]);

  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.headerTitle}>Deck Info</h2>
      </header>

      <section className={styles.content}>
        {!loading && error && <p>{error}</p>}
        {!error && loading && <p>Loading data...</p>}
        {!loading && !error && (
          <Fragment>
            <div className={styles.orderedCards}>
              <h3>Ordered Pile</h3>
              <div className={styles.listCards}>
                {pileName &&
                  piles &&
                  piles[pileName]?.cards?.map((card: Card, key: number) => (
                    <CardImage
                      key={key}
                      naipe={card.suit ?? ""}
                      value={card.value ?? ""}
                    />
                  ))}
              </div>
            </div>

            <div>
              <h3>Highest Card</h3>
              {pileName && piles && (
                <CardImage
                  naipe={piles[pileName]?.cards?.[0].suit ?? ""}
                  value={piles[pileName]?.cards?.[0].value ?? ""}
                />
              )}
            </div>

            <div className={styles.listCombinations}>
              <h3>Full House Combinations</h3>
              {fullHouseComb.length > 0 && (
                <ol>
                  {fullHouseComb.map((comb: any, index: number) => {
                    return (
                      <Fragment key={`${comb.toString()} ~ ${index}`}>
                        <li>{comb.map((c: Card) => c.code).join(", ")}</li>
                      </Fragment>
                    );
                  })}
                </ol>
              )}

              {fullHouseComb.length === 0 && <p>None</p>}
            </div>
          </Fragment>
        )}
      </section>
    </div>
  );
};

export default DeckInfo;
