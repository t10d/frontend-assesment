import { CARDS_LOADING, GET_CARDS_ACTION, GET_DECK_ID, GET_ROTATION_CARD_ACTION } from './cardTypes';
import api from '../services/api'

export function getDeckId() {
  return async (dispatch) => {
    const response = await api.get('new/shuffle')
    const deck_id = response.data.deck_id

    dispatch(getDeckIdAction(deck_id))
  }
}

export function getCards() {
  return async (dispatch, getState) => {

    const deck_id = await getState().cardsReducer.deck_id
    dispatch(cardsLoading(true))

    try {
      const cardsResponse = await api.get(`${deck_id}/draw/?count=10`)
      const cards = cardsResponse.data.cards
  
      dispatch(getCardsAction(cards))
    } catch (err) {
      console.log(err)
    }

    dispatch(cardsLoading(false))
  }
};

export function getRotationCard() {
  return async (dispatch, getState) => {
    const deck_id = await getState().cardsReducer.deck_id

    try {
      const rotationCardRequest = await api(`${deck_id}/draw/?count=1`)
      const rotationCard = rotationCardRequest.data.cards[0]
      dispatch(getRotatationCardAction(rotationCard))

    } catch(err) {
      console.log(err)
    }
  
  }
}

export function cardsLoading(bool) {
  return {
    type: CARDS_LOADING,
    isLoading: bool
  }
}

export function getDeckIdAction(deck_id) {
  return {
    type: GET_DECK_ID,
    deck_id
  } 
}

export function getCardsAction(cards) {
  return {
    type: GET_CARDS_ACTION,
    cards
  }
}

export function getRotatationCardAction(rotationCard) {
  return {
    type: GET_ROTATION_CARD_ACTION,
    rotationCard
  }
} 