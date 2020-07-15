import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../Form";
import styles from "./Deck.module.css";
import { validation } from "../utils";

const NewDeck = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    console.log("Dados heee: ", data);
  };

  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.headerTitle}>Cards</h2>
      </header>
      <section className={styles.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className={styles.cardsTitle}>Select your cards:</h3>
          <div className={styles.cardsContainer}>
            <div>
              <Input
                placeholder="Card 1"
                name="card1"
                register={register(validation)}
              />
              {errors.card1 && <span>Error</span>}
            </div>
            <div>
              <Input
                placeholder="Card 2"
                name="card2"
                register={register(validation)}
              />
              {errors.card2 && <span>Error</span>}
            </div>
            <div>
              <Input
                placeholder="Card 3"
                name="card3"
                register={register(validation)}
              />
              {errors.card3 && <span>Error</span>}
            </div>
            <div>
              <Input
                placeholder="Card 4"
                name="card4"
                register={register(validation)}
              />
              {errors.card4 && <span>Error</span>}
            </div>
            <div>
              <Input
                placeholder="Card 5"
                name="card5"
                register={register(validation)}
              />
              {errors.card5 && <span>Error</span>}
            </div>
            <div>
              <Input
                placeholder="Card 6"
                name="card6"
                register={register(validation)}
              />
              {errors.card6 && <span>Error</span>}
            </div>
            <div>
              <Input
                placeholder="Card 7"
                name="card7"
                register={register(validation)}
              />
              {errors.card7 && <span>Error</span>}
            </div>
            <div>
              <Input
                placeholder="Card 8"
                name="card8"
                register={register(validation)}
              />
              {errors.card8 && <span>Error</span>}
            </div>
            <div>
              <Input
                placeholder="Card 9"
                name="card9"
                register={register(validation)}
              />
              {errors.card9 && <span>Error</span>}
            </div>
            <div>
              <Input
                placeholder="Card 10"
                name="card10"
                register={register(validation)}
              />
              {errors.card10 && <span>Error</span>}
            </div>
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default NewDeck;
