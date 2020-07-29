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

export const setDeck = () => {
  store.dispatch({ type: 'SET_DECK' })
}

export const getDeck = () => {
  store.dispatch({ type: 'GET_DECK' })
}

export const setResultList = () => {
  store.dispatch({ type: 'SET_RESULT_LIST' })
}

export const setResultOrdered = () => {
  store.dispatch({ type: 'SET_RESULT_ORDERED' })
}

export const setResultBest = () => {
  store.dispatch({ type: 'SET_RESULT_BEST' })
}

export const setResultFullhouses = () => {
  store.dispatch({ type: 'SET_RESULT_FULLHOUSES' })
}
