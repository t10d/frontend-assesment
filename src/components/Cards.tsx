import React from "react";
import styled from "styled-components";
import SelectCard from "./SelectCard";
import ICard from "../models/Card";
import CardList from "./CardList";

const Container = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 20px 0px;
    width: 100%;
    flex-direction: column;
`;

interface ICards {
    suits: string[];
    values: string[];
    cards: ICard[];
    setSelectedSuit: Function;
    setSelectedValue: Function;
    handleAddCard: Function;
    handleRemoveCard: Function;
}

const Cards: React.FC<ICards> = ({
    cards,
    suits,
    values,
    setSelectedSuit,
    setSelectedValue,
    handleAddCard,
    handleRemoveCard,
}) => {
    return (
        <Container>
            <CardList {...{ cards, handleRemoveCard }} />
            {cards.length <= 10 ? (
                <SelectCard
                    {...{
                        suits,
                        values,
                        setSelectedSuit,
                        setSelectedValue,
                        handleAddCard,
                    }}
                    addButtonText="+ Adicionar Carta"
                />
            ) : null}
        </Container>
    );
};

export default Cards;
