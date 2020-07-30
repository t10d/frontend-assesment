import suitOrder from 'utils/json/suitOrder'
import valueOrder from 'utils/json/valueOrder'
import { recreateDeck, getDeckFromAPI } from './api'

const validCard = (card) => {
  const value = card.charAt(0)
  const suit = card.charAt(1)
  const suitObj = suitOrder.find((el) => el.value === suit)
  const valueObj = valueOrder.find((el) => el.code === value)
  return suitObj && valueObj ? { suit, value } : false
}

export const checkPivot = (pivot) => validCard(pivot)

export const shufleCardsList = (deckId, callback) => recreateDeck(deckId, callback)

export const getCardList = (deckId, quantity, callback) => getDeckFromAPI(deckId, quantity, callback)

export const processResult = () => {}
