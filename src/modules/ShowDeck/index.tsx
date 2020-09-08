import React, { useEffect } from "react";
import { fetchCards } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { reducers } from "../../store/reducers";
import {
  sortArray,
  getValuesFullHouse,
  getAllCombinations,
  getFullHouse,
} from "../../utils/array";
import CardRender from "./components/Card";
import "./style.css";

const ShowDeck: React.FC = () => {
  const dispatch = useDispatch();
  const path = window.location.href.split("/");
  useEffect(() => {
    dispatch(fetchCards(path[path.length - 1]));
  }, [dispatch, path]);

  const { rotation, cards } = useSelector(
    (state: typeof reducers) => state.showdeck
  );

  const cardsCode = cards.map((c: any) => c.code);

  const ordenedDeck = sortArray(rotation, cardsCode);

  const valueFullHouse = getValuesFullHouse(cardsCode);
  const allCombinations = valueFullHouse.map((e: any) => getAllCombinations(e));

  const fullHouse = getFullHouse(allCombinations);

  return (
    <div className="deck">
      <h1 className="deck__title">Page 2</h1>
      <div className="deck__content">
        <h2 className="deck__subtitle">Ordered Pile</h2>
        <div className="deck__cards">
          {ordenedDeck.map((card: String) => (
            <CardRender key={card.toString()} card={card} />
          ))}
          <div></div>
        </div>
        <h2>- High Card: {ordenedDeck[0]}</h2>
        {!fullHouse.length ? (
          <h2>- Full House Combinations: None</h2>
        ) : (
          <>
            <h2>- Full House Combinations: </h2>
            <ul className="deck__fullhouse">
              {fullHouse &&
                fullHouse
                  .slice(0, 15)
                  .map((e: String) => <li key={e.toString()}>{e}</li>)}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ShowDeck;
