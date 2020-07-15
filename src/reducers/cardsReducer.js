import { CARDS_LOADING, GET_DECK_ID, GET_CARDS_ACTION, GET_ROTATION_CARD_ACTION, REARANGE_ARRAY, LOADING_ROTATION_CARD } from '../actions/cardTypes';

const INITIAL_STATE = {
  deck_id: '',
  cards: [],
  rotationCard: {},
  isLoading: false,
  loadingRotation: false,
  numberSequence: ['2', 'A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3'],
  suitSequence: ['hearts', 'diamonds', 'clubs', 'spades'],
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
    case REARANGE_ARRAY:
      return {
        ...state,
        numberSequence: action.numberSequence,
        suitSequence: action.suitSequence
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
    case LOADING_ROTATION_CARD:
      return {
        ...state,
        loadingRotation: action.loadingRotation
      }
    default:
      return state
  }
}