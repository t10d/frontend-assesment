import React from "react";

type CardRenderProps = {
  card: String;
};

const CardRender: React.FC<CardRenderProps> = ({ card }) => {
  const suit = card[card.length - 1];
  const value = card.slice(0, card.length - 1);
  return (
    <div className="card__background">
      <h2 className="card__value card__value--left">{value}</h2>
      <h2 className={`card__suit card__suit--${suit}`}>{suit}</h2>
      <h2 className="card__value card__value--rigth">{value}</h2>
    </div>
  );
};

export default CardRender;
