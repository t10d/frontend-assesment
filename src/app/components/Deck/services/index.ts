import api from "../../../services";
import { Card } from "./types";
const pileName = process.env.REACT_APP_PILE_NAME;

export const createDeck = (cards: Card[]): Promise<any> => {
  const newCards = cards.map((card) => card.code).join();
  return api.get(`/new/?cards=${newCards}`).then(({ data }) => data);
};

export const drawCards = (deckID: string, count: number): Promise<any> => {
  return api.get(`/${deckID}/draw/?count=${count}`).then(({ data }) => data);
};

export const createPile = (deckID: string, cards: Card[]) => {
  const newCards = cards.map((card) => card.code).join();

  return api
    .get(`/${deckID}/pile/${pileName}/add/?cards=${newCards}`)
    .then(({ data }) => data);
};

export const getPile = (deckID: string) => {
  return api.get(`/${deckID}/pile/${pileName}/list`).then(({ data }) => data);
};
