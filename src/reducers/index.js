import defaultState from '../utils/js/state'
import { newCards, addCard, resetCards, setResultList, setRotated, setResultOrdered, randomCards } from './functions'

export const Reducers = (state = defaultState(), action) => {
  const { settings } = state
  switch (action.type) {
    case 'CHANGE_QUANTITY':
      settings.quantity = action.value
      return { ...state, settings, cards: newCards(state, action.value) }
    case 'CHANGE_VISUAL':
      settings.visual = action.value
      return { ...state, settings }
    case 'ADD_CARD':
      return { ...state, cards: addCard(state, action.position, action.card) }
    case 'CHANGE_PIVOT':
      return { ...state, pivot: action.card }
    case 'RESET_CARDS':
      return resetCards(state)
    case 'SET_DECK':
      return { ...state, deck: action.deck }
    case 'SET_RESULT_LIST':
      return setResultList(state, action.list)
    case 'SET_RESULT_ORDERED':
      return setResultOrdered(state, action.ordered)
    case 'SET_RESULT_FULLHOUSES':
      return state
    case 'SET_ROTATED':
      return setRotated(state, action.rotated)
    case 'RANDOM_CARDS':
      return randomCards(state)
    default:
      return state
  }
}

export default Reducers
