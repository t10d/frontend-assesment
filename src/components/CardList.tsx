import React from "react";
import styled from "styled-components";
import ICard from "../models/Card";
import Card from "./Card";

const Container = styled.div`
    display: flex;
    width: 100%;
`;

interface ICardList {
    cards: ICard[];
    handleRemoveCard?: Function;
}

const CardList: React.FC<ICardList> = ({ cards, handleRemoveCard }) => {
    return (
        <Container role="card_list">
            {cards.map((card, index) =>
                card.suit ? (
                    <Card
                        key={index}
                        suit={card.suit}
                        value={card.value}
                        {...{ handleRemoveCard, index }}
                    />
                ) : null
            )}
        </Container>
    );
};

export default CardList;
