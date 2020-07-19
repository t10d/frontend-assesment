import React from "react";
import styled from "styled-components";
import SelectCard from "./SelectCard";
import ICard from "../models/Card";
import Card from "./Card";

const Container = styled.div``;

interface IHome {
    suits: string[];
    values: string[];
    setSelectedSuit: Function;
    setSelectedValue: Function;
    setSelectedRotationSuit: Function;
    setSelectedRotationValue: Function;
    handleAddCard: Function;
    handleAddRotationCard: Function;
    cards: ICard[];
    rotationCard: ICard;
}

const Home: React.FC<IHome> = ({
    suits,
    values,
    cards,
    rotationCard,
    setSelectedSuit,
    setSelectedValue,
    setSelectedRotationSuit,
    setSelectedRotationValue,
    handleAddCard,
    handleAddRotationCard,
}) => {
    return (
        <Container>
            {cards.map((card) => (
                <h1>
                    {card.value}
                    {card.suit}
                </h1>
            ))}
            <SelectCard
                {...{
                    suits,
                    values,
                    setSelectedSuit,
                    setSelectedValue,
                    handleAddCard,
                }}
            />
            <h1>
                CARTA DE ROTACAO: 
                {rotationCard.value}
                {rotationCard.suit}
            </h1>
            <SelectCard
                {...{
                    suits,
                    values,
                }}
                setSelectedSuit={setSelectedRotationSuit}
                setSelectedValue={setSelectedRotationValue}
                handleAddCard={handleAddRotationCard}
            />
            <Card suit={rotationCard.suit} value={rotationCard.value}/>
        </Container>
    );
};

export default Home;
