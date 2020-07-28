import defaultState from '../utils/json/defaultState.json'

const empty = {
  value: null,
  suit: null
}

const newCards = (state, quantity) => {
  const cards = []
  for (let i = 0; i < quantity; i += 1) {
    const addNew = state.cards[i] ? state.cards[i] : empty
    cards.push(addNew)
  }
  return cards
}

const addCard = (state, position, card) => {
  const { cards } = state
  cards[position] = card
  return cards
}

const resetCards = (state) => {
  const cards = state.cards.map(() => empty)
  return { ...state, pivot: empty, cards }
}

export const Reducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_QUANTITY':
      return { ...state, quantity: action.value, cards: newCards(state, action.value) }
    case 'CHANGE_VISUAL':
      return { ...state, visual: action.value }
    case 'ADD_CARD':
      return { ...state, cards: addCard(state, action.position, action.card) }
    case 'CHANGE_PIVOT':
      return { ...state, pivot: action.card }
    case 'RESET_CARDS':
      return resetCards(state)
    default:
      return state
  }
}

export default Reducers
