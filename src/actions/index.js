import store from '../store'

export const changeCardsQuantity = (value) => {
  store.dispatch({ type: 'CHANGE_QUANTITY', value })
}

export const changeCardsVisual = (value) => {
  store.dispatch({ type: 'CHANGE_VISUAL', value })
}

export const addNewCard = (position, card) => {
  store.dispatch({ type: 'ADD_CARD', position, card })
}

export const changePivot = (card) => {
  store.dispatch({ type: 'CHANGE_PIVOT', card })
}

export const removeCard = (position) => {
  store.dispatch({ type: 'REMOVE_CARD', position })
}

export const resetCards = () => {
  store.dispatch({ type: 'RESET_CARDS' })
}

export const setDeck = (deck) => {
  store.dispatch({ type: 'SET_DECK', deck })
}

export const setResultList = (list) => {
  store.dispatch({ type: 'SET_RESULT_LIST', list })
}

export const setResultOrdered = (ordered) => {
  store.dispatch({ type: 'SET_RESULT_ORDERED', ordered })
}

export const setResultFullhouses = (fullhouses) => {
  store.dispatch({ type: 'SET_RESULT_FULLHOUSES', fullhouses })
}

export const setRotated = (rotated) => {
  store.dispatch({ type: 'SET_ROTATED', rotated })
}

export const randomCards = () => {
  store.dispatch({ type: 'RANDOM_CARDS' })
}
