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

const rotateValues = (values, pivot) => {
  const value = values.pop()
  const rotatedValues = [value, ...values]
  return rotatedValues[0].code === pivot.value ? rotatedValues : rotateValues(rotatedValues, pivot)
}

const rotateSuits = (suits, pivot) => {
  const suit = suits.pop()
  const rotatedSuits = [suit, ...suits]
  return rotatedSuits[0].value === pivot.suit ? rotatedSuits : rotateSuits(rotatedSuits, pivot)
}

export const rotateCardsFromPivot = (pivot) => {
  const cards = rotateValues(valueOrder, pivot)
  const suits = rotateSuits(suitOrder, pivot)
  return { cards, suits }
}

export const processResult = () => {}
