import Card from "./Card";

export interface IRootState {
    deck: Card[],
    rotationCard: Card,
    deckId: string,
}

export interface IData {
    deck: Card[],
    rotationCard: Card,
}