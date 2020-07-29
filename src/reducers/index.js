import defaultState from '../utils/json/defaultState.json'
import { newCards, addCard, resetCards } from './functions'

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
    case 'SET_DECK':
      return state
    case 'GET_DECK':
      return state
    case 'SET_RESULT_LIST':
      return state
    case 'SET_RESULT_ORDERED':
      return state
    case 'SET_RESULT_BEST':
      return state
    case 'SET_RESULT_FULLHOUSES':
      return state
    default:
      return state
  }
}

export default Reducers
