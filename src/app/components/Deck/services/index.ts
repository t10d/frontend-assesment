import api from "../../../services";

export const createDeck = (cards: string[]): Promise<any> => {
  return api.get(`/new/?cards=${cards.join()}`).then(({data}) => data);
};

export const drawCards = (deckID: string, count: number): Promise<any> => {
  return api.get(`/deck/${deckID}/draw/?count=${count}`).then(({data}) => data);
};

export const createPile = (deckID: string, pileName: string, cards: string[]) => {
  return api.get(`/deck/${deckID}/pile/${pileName}/add/?cards=${cards.join()}`).then(({data}) => data);
}