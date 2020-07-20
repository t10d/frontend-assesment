import React from "react";
import ICard from "../models/Card";
import CardList from "./CardList";
import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
    h1 {
        margin: 15px 0px;
    }
`;

interface IResult {
    sortedDeck: ICard[];
}

const Result: React.FC<IResult> = ({ sortedDeck }) => {
    return (
        <Container>
            <h1>Cartas Ordenadas</h1>
            <CardList cards={sortedDeck} />
            <h1>Maior Carta: </h1>
            <Card suit={sortedDeck[0]?.suit} value={sortedDeck[0]?.value} />
        </Container>
    );
};

export default Result;
