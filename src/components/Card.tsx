import React from "react";
import ICard from "../models/Card";
import styled from "styled-components";

interface ICardComponent extends ICard {
    index?: number;
    handleRemoveCard?: Function;
}

interface CardStyleProp {
    color: string;
}

const Container = styled.div<CardStyleProp>`
    color: ${(props) => props.color};
    border-radius: 5px;
    width: 120px;
    height: 200px;
    background: white;
    padding: 10px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);

    span:last-child {
        align-self: flex-end;
    }

    .firstLine {
        display: flex;
        justify-content: space-between;
    }
`;

const Value = styled.span`
    font-weight: bold;
`;

const Suit = styled.span`
    font-size: 50px;
    align-self: center;
`;

const DeleteCard = styled.span`
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        color: #666666;
    }
`;

const suitMap: { [key: string]: JSX.Element } = {
    S: <Suit>&spades;</Suit>,
    H: <Suit>&hearts;</Suit>,
    D: <Suit>&diams;</Suit>,
    C: <Suit>&clubs;</Suit>,
};

const Card: React.FC<ICardComponent> = ({ index, suit, value, handleRemoveCard }) => {
    const color = suit === "H" || suit === "D" ? "red" : "black";

    return (
        <Container color={color}>
            <div className="firstLine">
                <Value>{value}</Value>
                { handleRemoveCard ? (<DeleteCard onClick={(index) => handleRemoveCard(index)} >x</DeleteCard>) : null }
            </div>
            {suitMap[suit]}
            <Value>{value}</Value>
        </Container>
    );
};

export default Card;
