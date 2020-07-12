import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

type NewDeckData = {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
};

export function createDeck(cards: string[]): Promise<NewDeckData> {
  return api
    .get(`/deck/new/?cards=${cards.join()}`)
    .then(({ data }) => data);
}

export function drawCards(deckId: string, count: number) {
  return api
    .get(`/deck/${deckId}/draw/?count=${count}`)
    .then(data => data);
}

export function createPile(
  deckId: string,
  pileName: string,
  cards: string[],
) {
  return api
    .get(`/deck/${deckId}/pile/${pileName}/add/?cards=${cards.join()}`)
    .then(data => data);
}
