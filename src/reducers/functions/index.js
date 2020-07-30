const empty = {
  value: null,
  suit: null
}

export const newCards = (state, quantity) => {
  const cards = []
  for (let i = 0; i < quantity; i += 1) {
    const addNew = state.cards[i] ? state.cards[i] : empty
    cards.push(addNew)
  }
  return cards
}

export const addCard = (state, position, card) => {
  const { cards } = state
  cards[position] = card
  return cards
}

export const resetCards = (state) => {
  const cards = state.cards.map(() => empty)
  return { ...state, pivot: empty, cards }
}

export const setResultList = (state, list) => {
  const { result } = state
  result.list = list
  return { ...state, ...result }
}

export const setRotated = (state, rotated) => {
  const { result } = state
  result.rotated = rotated
  return { ...state, ...result }
}
