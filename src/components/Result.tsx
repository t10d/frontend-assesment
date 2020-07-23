import React from "react";
import ICard from "../models/Card";
import CardList from "./CardList";
import styled from "styled-components";
import Card from "./Card";
import ForwardArrow from "../assets/icons/forward-arrow.svg";
import history from "../services/history";

const Container = styled.div`
    h1 {
        margin: 15px 0px;
    }
`;

const Back = styled.button`
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: 0;
    padding: 10px 5px;
    font-size: 16px;
    background-color: #204e4a;
    color: #fdf;
    font-weight: bold;
    align-self: center;

    img {
        padding-left: 5px;
        transform: scaleX(-1);
    }
`;

interface IResult {
    sortedDeck: ICard[];
    fullhouses: ICard[][];
}

const Result: React.FC<IResult> = ({ sortedDeck, fullhouses }) => {
    return (
        <Container>
            <Back onClick={() => history.push("/")}>
                <img
                    src={ForwardArrow}
                    alt="Forward Arrow"
                    width="24px"
                    height="24px"
                />
                VOLTAR
            </Back>
            <h1>Cartas Ordenadas</h1>
            <CardList cards={sortedDeck} />
            <h1>Maior Carta: </h1>
            <Card suit={sortedDeck[0]?.suit} value={sortedDeck[0]?.value} />
            <h1>Full Houses: </h1>
            { fullhouses.length > 0 ? fullhouses.map((cards, index) => (
                <>
                    <CardList key={index} {...{ cards }} />
                    <br />
                </>
            )) : (<h1>None!</h1>)}
        </Container>
    );
};

export default Result;
