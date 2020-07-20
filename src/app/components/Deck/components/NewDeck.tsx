import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../Form";
import styles from "./Deck.module.css";
import { validation, sortCards } from "../../../../utils";
import { createDeck, drawCards, createPile } from "../services";
import { useSelector, useDispatch } from "react-redux";
import {
  selectDeckInfo,
  getDeckDetailsSuccess,
  getDeckDetailsStart,
  getDeckDetailsError,
} from "../reducers";

const NewDeck = (props: any) => {
  const { register, handleSubmit, errors } = useForm();
  const { loading, error } = useSelector(selectDeckInfo);
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    const rotationCard = data.rotation;
    data["rotation"] = undefined;

    const cards = Object.values(data)
      .filter((card: any) => Boolean(card))
      .map((card: any) => {
        return { code: card.toUpperCase() };
      });

    dispatch(getDeckDetailsStart());
    createDeck(cards)
      .then((deck) => deck)
      .then((deck) => drawCards(deck.deck_id, deck.remaining))
      .then((deck) => createPile(deck.deck_id, sortCards(cards, rotationCard)))
      .then((result) => {
        dispatch(
          getDeckDetailsSuccess({
            deck_id: result.deck_id,
            piles: result.piles,
            rotation: rotationCard,
          })
        );
        props.history.push(`/deck/${result.deck_id}`);
      })
      .catch((error) =>
        dispatch(
          getDeckDetailsError({ error: "An error occured when saving data" })
        )
      );
  };

  const RenderError = () => (
    <span data-testid="form-error" className={styles.error}>
      Please, enter a valid card.
    </span>
  );

  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.headerTitle}>Cards</h2>
      </header>

      <section className={styles.content}>
        {!loading && error && <p>{error}</p>}
        {!error && loading && <p>Loading data...</p>}
        {!loading && !error && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className={styles.cardsTitle}>Select your cards:</h3>
            <div className={styles.cardsContainer}>
              <div>
                <Input
                  placeholder="Card 1"
                  name="card1"
                  register={register({ ...validation, required: true })}
                />
                {errors.card1 && <RenderError />}
              </div>
              <div>
                <Input
                  placeholder="Card 2"
                  name="card2"
                  register={register(validation)}
                />
                {errors.card2 && <RenderError />}
              </div>
              <div>
                <Input
                  placeholder="Card 3"
                  name="card3"
                  register={register(validation)}
                />
                {errors.card3 && <RenderError />}
              </div>
              <div>
                <Input
                  placeholder="Card 4"
                  name="card4"
                  register={register(validation)}
                />
                {errors.card4 && <RenderError />}
              </div>
              <div>
                <Input
                  placeholder="Card 5"
                  name="card5"
                  register={register(validation)}
                />
                {errors.card5 && <RenderError />}
              </div>
              <div>
                <Input
                  placeholder="Card 6"
                  name="card6"
                  register={register(validation)}
                />
                {errors.card6 && <RenderError />}
              </div>
              <div>
                <Input
                  placeholder="Card 7"
                  name="card7"
                  register={register(validation)}
                />
                {errors.card7 && <RenderError />}
              </div>
              <div>
                <Input
                  placeholder="Card 8"
                  name="card8"
                  register={register(validation)}
                />
                {errors.card8 && <RenderError />}
              </div>
              <div>
                <Input
                  placeholder="Card 9"
                  name="card9"
                  register={register(validation)}
                />
                {errors.card9 && <RenderError />}
              </div>
              <div>
                <Input
                  placeholder="Card 10"
                  name="card10"
                  register={register(validation)}
                />
                {errors.card10 && <RenderError />}
              </div>
            </div>
            <div className={styles.rotation}>
              <Input
                placeholder="Rotation Card"
                name="rotation"
                register={register({ ...validation, required: true })}
              />
              {errors.rotation && <RenderError />}
            </div>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default NewDeck;
