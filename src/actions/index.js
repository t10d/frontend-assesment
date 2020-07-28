import store from '../store'

export const changeCardsQuantity = (value) => {
  store.dispatch({ type: 'CHANGE_QUANTITY', value })
}

export const changeCardsVisual = (value) => {
  store.dispatch({ type: 'CHANGE_VISUAL', value })
}

export const addNewCard = (position, card) => {
  const newCard = { position, card }
  store.dispatch({ type: 'CHANGE_VISUAL', newCard })
}

export const removeCard = (position) => {
  store.dispatch({ type: 'CHANGE_VISUAL', position })
}
