import { CARDS_LOADING, GET_CARDS_ACTION, GET_DECK_ID, GET_ROTATION_CARD_ACTION, REARANGE_ARRAY, numberSequence, suitSequence, LOADING_ROTATION_CARD } from './cardTypes';
import api from '../services/api'
import { orderHandCards, rearangeArray, getCardValue } from './gameFunctions';


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

    dispatch(loadingRotationCard(true))
    try {
      const rotationCardRequest = await api(`${deck_id}/draw/?count=1`)
      const rotationCard = rotationCardRequest.data.cards[0]
      dispatch(rearangeOrderArray(rotationCard))
      dispatch(getRotatationCardAction(rotationCard))
      dispatch(loadingRotationCard(false))
    } catch(err) {
      console.log(err)
    }
  
  }
}

export function orderCardsBasedOnRotationCard() {
  return async (dispatch, getState) => {
    dispatch(cardsLoading(true))
    const numberSequence = getState().cardsReducer.numberSequence
    const suitSequence = getState().cardsReducer.suitSequence
    const cards = getState().cardsReducer.cards
    
    const orderedArray = orderHandCards(suitSequence, numberSequence, cards)
    dispatch(getCardsAction(orderedArray))
    dispatch(cardsLoading(false))
  }
}


function rearangeOrderArray(rotationCard) {
  const pivot = getCardValue(rotationCard.value)
  const newArrayNumber = rearangeArray([...numberSequence], pivot)

  const newArraySuit = rearangeArray([...suitSequence], rotationCard.suit.toLowerCase())

  return {
    type: REARANGE_ARRAY,
    numberSequence: newArrayNumber,
    suitSequence: newArraySuit
  }
}

function cardsLoading(bool) {
  return {
    type: CARDS_LOADING,
    isLoading: bool
  }
}

function loadingRotationCard(bool) {
  return {
    type: LOADING_ROTATION_CARD,
    loadingRotation: bool
  }
}

function getDeckIdAction(deck_id) {
  return {
    type: GET_DECK_ID,
    deck_id
  } 
}

function getCardsAction(cards) {
  return {
    type: GET_CARDS_ACTION,
    cards
  }
}

function getRotatationCardAction(rotationCard) {
  return {
    type: GET_ROTATION_CARD_ACTION,
    rotationCard
  }
} 