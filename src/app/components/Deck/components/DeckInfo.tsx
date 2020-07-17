import React, { useEffect, useState, Fragment } from "react";
import styles from "./Deck.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectDeckInfo, addPilesToDeck } from "../reducers";
import { getPile } from "../services";
import { findFullHouseCombinations } from "../../../../utils";
import { Card } from "../services/types";

const DeckInfo = (props: any) => {
  const { loading, error, piles } = useSelector(selectDeckInfo);
  const [fullHouseComb, setFullHouseComb] = useState<Card[]>([]);
  const dispatch = useDispatch();
  const deckID = props.match.params.id;
  const pileName = process.env.REACT_APP_PILE_NAME;

  useEffect(() => {
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
      });
  }, [deckID, dispatch, pileName, setFullHouseComb]);

  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.headerTitle}>Deck Info</h2>
      </header>
      {!loading && !error && (
        <section className={styles.content}>
          <div className={styles.orderedCards}>
            <h3>Ordered Pile</h3>
            {pileName &&
              piles &&
              piles[pileName].cards.map((card: Card, key: number) => {
                return (
                  <img
                    className={styles.orderedImg}
                    key={key}
                    src={card.image}
                    alt="hahaha"
                  />
                );
              })}
          </div>

          <div>
            <h3>Highest Card</h3>
            {pileName && piles && (
              <img
                className={styles.orderedImg}
                src={piles[pileName].cards[0].image}
                alt="hahaha"
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
                      <li>
                        [
                        {JSON.stringify(
                          comb.map((c: Card) => c.code).join(", ")
                        )}
                        ]
                      </li>
                    </Fragment>
                  );
                })}
              </ol>
            )}

            {fullHouseComb.length === 0 && <p>None</p>}
          </div>
        </section>
      )}
    </div>
  );
};

export default DeckInfo;
