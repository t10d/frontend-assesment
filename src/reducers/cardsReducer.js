import { CARDS_LOADING, GET_DECK_ID, GET_CARDS_ACTION, GET_ROTATION_CARD_ACTION } from '../actions/cardTypes';

const INITIAL_STATE = {
  deck_id: '',
  cards: [],
  rotationCard: {},
  isLoading: false
}

export function cardsReducer(state = INITIAL_STATE, action){
  switch(action.type) {
    case CARDS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case GET_DECK_ID:
      return {
        ...state,
        deck_id: action.deck_id
      }
    case GET_CARDS_ACTION:
      return {
        ...state,
        cards: action.cards
      }
    case GET_ROTATION_CARD_ACTION:
      return {
        ...state,
        rotationCard: action.rotationCard
      }
    default:
      return state
  }
}