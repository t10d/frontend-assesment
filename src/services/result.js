import { recreateDeck, getDeckFromAPI } from './api'

export const shufleCardsList = (deckId, callback) => recreateDeck(deckId, callback)

export const getCardList = (deckId, quantity, callback) => getDeckFromAPI(deckId, quantity, callback)
