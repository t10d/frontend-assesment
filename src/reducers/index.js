import defaultState from '../utils/json/defaultState.json'

const empty = {
  value: null,
  suit: null
}

const newCards = (state, quantity) => {
  const cards = []
  for (let i = 0; i < quantity; i += 1) {
    const addNew = state[i] ? state[i] : empty
    cards.push(addNew)
  }
  return cards
}

export const Reducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_QUANTITY':
      return { ...state, quantity: action.value, cards: newCards(state, action.value) }
    case 'CHANGE_VISUAL':
      return { ...state, visual: action.value }
    default:
      return state
  }
}

export default Reducers
