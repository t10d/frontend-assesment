import React from "react";
import ICard from "../models/Card";

const Card: React.FC<ICard> = ({ suit, value }) => {
    return (
        <div>
            <span>7</span>
            <span>&spades;</span>
        </div>
    );
};

export default Card;
