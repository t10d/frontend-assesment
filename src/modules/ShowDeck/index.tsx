import React, { useEffect } from "react";
import { fetchCards } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { reducers } from "../../store/reducers";
import { shortArray } from "../../utils/array";
import "./style.css";

const ShowDeck: React.FC = () => {
  const dispatch = useDispatch();
  const path = window.location.href.split("/");
  useEffect(() => {
    dispatch(fetchCards(path[path.length - 1]));
  }, [dispatch]);

  const { fail, loading, rotation, cards } = useSelector(
    (state: typeof reducers) => state.showdeck
  );

  console.log(
    shortArray("6S", [
      "2S",
      "KS",
      "AH",
      "8S",
      "4S",
      "9S",
      "JS",
      "5S",
      "6S",
      "7S",
      "QS",
      "3D",
      "1S",
    ])
  );
  const ordenedDeck = shortArray(
    rotation,
    cards.map((c: any) => c.code)
  );
  console.log(
    shortArray(
      rotation,
      cards.map((c: any) => c.code)
    )
  );

  return (
    <div className="deck">
      <h1 className="deck__title">Page 2</h1>
      <div className="deck__content">
        <h2 className="deck__subtitle">Ordered Pile</h2>
        <div>{ordenedDeck}</div>
        <h2>- High Card: {ordenedDeck[0]}</h2>
        <h2>- Full House Combinations: None</h2>
      </div>
    </div>
  );
};

export default ShowDeck;
