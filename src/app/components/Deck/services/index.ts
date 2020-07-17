import api from "../../../services";

export const createDeck = (cards: string[]): Promise<any> => {
  return api.get(`/new/?cards=${cards.join()}`).then(({data}) => data);
};

export const drawCards = (deckID: string, count: number): Promise<any> => {
  return api.get(`/${deckID}/draw/?count=${count}`).then(({data}) => data);
};

export const createPile = (deckID: string,  cards: string[]) => {
  const pileName = process.env.REACT_APP_PILE_NAME;
  return api.get(`/${deckID}/pile/${pileName}/add/?cards=${cards.join()}`).then(({data}) => data);
}