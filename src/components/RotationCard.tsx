import React from "react";
import styled from "styled-components";
import SelectCard from "./SelectCard";
import Card from "./Card";
import ICard from "../models/Card";

const SelectedRotationCard = styled.div`
    h1 {
        margin-bottom: 15px;
    }
`;

interface IRotationCard {
    suits: string[];
    values: string[];
    setSelectedRotationSuit: Function;
    setSelectedRotationValue: Function;
    handleAddRotationCard: Function;

    rotationCard: ICard;
}

const RotationCard: React.FC<IRotationCard> = ({
    rotationCard,
    setSelectedRotationSuit,
    setSelectedRotationValue,
    handleAddRotationCard,
    suits,
    values,
}) => {
    return (
        <SelectedRotationCard>
            <h1>
                CARTA DE ROTACAO:
            </h1>
            {rotationCard.suit ? (
                <Card suit={rotationCard.suit} value={rotationCard.value} />
            ) : null}
            <SelectCard
                {...{
                    suits,
                    values,
                }}
                setSelectedSuit={setSelectedRotationSuit}
                setSelectedValue={setSelectedRotationValue}
                handleAddCard={handleAddRotationCard}
                addButtonText="Selecionar Carta de Rotacão"
            />
        </SelectedRotationCard>
    );
};

export default RotationCard;
