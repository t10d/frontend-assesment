import React, { SyntheticEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reducers } from "../../store/reducers";
import { createEmptyDeck, saveDeck } from "./actions";
import { getValuesFromForm } from "../../utils/form";
import "./style.css";

const DeckForm: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createEmptyDeck());
  }, [dispatch]);

  const { fail, loading, deck_id } = useSelector(
    (state: typeof reducers) => state.deckform
  );

  const createDeck = (e: SyntheticEvent) => {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      const deck = getValuesFromForm(e.target);
      const cards = deck
        .slice(0, deck.length - 1)
        .join(",")
        .toUpperCase();
      const rotationCard = deck[deck.length - 1].toUpperCase();
      dispatch(saveDeck(deck_id, rotationCard, cards));
    }
  };

  return (
    <div className="form">
      <h1 className="form__title">Page 1</h1>
      <form className="form__content" onSubmit={createDeck}>
        <h2 className="form__subtitle">Cards</h2>
        <div className="form__input-group">
          <input
            data-cy="form-input"
            className="form__input"
            type="text"
          ></input>
          <input
            data-cy="form-input"
            className="form__input"
            type="text"
          ></input>
          <input
            data-cy="form-input"
            className="form__input"
            type="text"
          ></input>
          <input
            data-cy="form-input"
            className="form__input"
            type="text"
          ></input>
          <input
            data-cy="form-input"
            className="form__input"
            type="text"
          ></input>
          <input
            data-cy="form-input"
            className="form__input"
            type="text"
          ></input>
          <input
            data-cy="form-input"
            className="form__input"
            type="text"
          ></input>
          <input
            data-cy="form-input"
            className="form__input"
            type="text"
          ></input>
          <input
            data-cy="form-input"
            className="form__input"
            type="text"
          ></input>
          <input
            data-cy="form-input"
            className="form__input"
            type="text"
          ></input>
        </div>
        <div className="form__rotation-card">
          <h2 className="form__subtitle">Rotation Card:</h2>{" "}
          <input
            data-cy="form-input"
            className="form__input"
            type="text"
          ></input>{" "}
        </div>
        <button data-cy="form-submit" type="submit" className="form__submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DeckForm;
