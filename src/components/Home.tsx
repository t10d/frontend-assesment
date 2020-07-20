import React from "react";
import styled from "styled-components";
import ICard from "../models/Card";
import Cards from "./Cards";
import RotationCard from "./RotationCard";
import ForwardArrow from "../assets/icons/forward-arrow.svg";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

const Submit = styled.button`
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 0;
    padding: 15px 20px;
    font-size: 16px;
    background-color: #204E4A;
    color: #fdf;
    font-weight: bold;
    align-self: center;

    img {
        margin-left: 5px;
    }
`;

interface IHome {
    suits: string[];
    values: string[];
    cards: ICard[];
    rotationCard: ICard;
    setSelectedSuit: Function;
    setSelectedValue: Function;
    setSelectedRotationSuit: Function;
    setSelectedRotationValue: Function;
    handleAddCard: Function;
    handleAddRotationCard: Function;
    handleRemoveCard: Function;
    handleSubmit: Function;
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
    handleRemoveCard,
    handleSubmit,
}) => {
    return (
        <Container>
            <Cards
                {...{
                    cards,
                    suits,
                    values,
                    setSelectedSuit,
                    setSelectedValue,
                    handleAddCard,
                    handleRemoveCard,
                }}
            />
            <RotationCard
                {...{
                    rotationCard,
                    setSelectedRotationSuit,
                    setSelectedRotationValue,
                    handleAddRotationCard,
                    suits,
                    values,
                }}
            />
            <Submit onClick={() => handleSubmit()}>SUBMETER <img src={ForwardArrow} alt="Forward Arrow" width="24px" height="24px"/></Submit>
        </Container>
    );
};

export default Home;
