import React from "react";
import styles from "./Deck.module.css";

interface CardProps {
  naipe: string;
  value: string;
}

const Card = ({ naipe, value }: CardProps) => {
  const naipes =
    naipe.toLowerCase() === "diamonds" ? "diams" : naipe.toLowerCase();
  const innerHTML = { __html: `&${naipes};` };

  return (
    <div className={styles.cardContainer} data-card={naipes}>
      <div className={styles.cardTop}>
        <span>{value}</span>
        <span dangerouslySetInnerHTML={innerHTML} />
      </div>

      <div className={styles.cardCenter}>
        <span dangerouslySetInnerHTML={innerHTML} />
      </div>

      <div className={styles.cardBottom}>
        <span>{value}</span>
        <span dangerouslySetInnerHTML={innerHTML} />
      </div>
    </div>
  );
};

export default Card;
