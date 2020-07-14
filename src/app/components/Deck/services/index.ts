import axios from "axios";

const ax = axios.create({
  baseURL: "https://...",
});

export const createDeck = (cards: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    resolve();
  });
};

export const shuffleDeck = (): Promise<any> => {
  return new Promise((resolve, reject) => resolve());
};
