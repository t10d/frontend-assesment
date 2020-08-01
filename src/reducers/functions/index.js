import suitsFunc from 'utils/js/suits'
import valuesFunc from 'utils/js/values'

const empty = {
  value: null,
  suit: null
}

export const newCards = (state, quantity) => {
  const cards = []
  for (let i = 0; i < quantity; i += 1) {
    const addNew = state.cards[i] ? state.cards[i] : empty
    cards.push(addNew)
  }
  return cards
}

export const addCard = (state, position, card) => {
  const { cards } = state
  cards[position] = card
  return cards
}

export const resetCards = (state) => {
  const cards = state.cards.map(() => empty)
  return { ...state, pivot: empty, cards }
}

export const setResultList = (state, list) => {
  const { result } = state
  result.list = list
  return { ...state, ...result }
}

export const setRotated = (state, rotated) => {
  const { result } = state
  result.rotated = rotated
  return { ...state, ...result }
}

export const setResultOrdered = (state, ordered) => {
  const { result } = state
  result.ordered = ordered
  const best = ordered[0]
  result.best = best
  return { ...state, ...result }
}
const recursiveRandomCards = (position, cards, quantity) => {
  if (position === quantity) return cards
  const randomValue = Math.floor(Math.random() * valuesFunc().length)
  const randomSuit = Math.floor(Math.random() * suitsFunc().length)
  if (
    cards.every((card) => card.suit !== suitsFunc()[randomSuit].value || card.value !== valuesFunc()[randomValue].code)
  ) {
    return recursiveRandomCards(
      position + 1,
      [...cards, { value: valuesFunc()[randomValue].code, suit: suitsFunc()[randomSuit].value }],
      quantity
    )
  }
  return recursiveRandomCards(position, cards, quantity)
}

export const randomCards = (state) => {
  const { quantity } = state.settings
  const randomValue = Math.floor(Math.random() * valuesFunc().length)
  const randomSuit = Math.floor(Math.random() * suitsFunc().length)
  const pivot = { value: valuesFunc()[randomValue].code, suit: suitsFunc()[randomSuit].value }
  const cards = recursiveRandomCards(0, [], quantity)
  return { ...state, cards, pivot }
}
