import { createDeck } from './api'

const submitCardsToDeck = async (cards, callback) => {
  const filtered = cards.filter((card) => card.value && card.suit)
  const listOfCards = filtered.map((card) => card.value + card.suit)
  /* eslint-disable no-param-reassign */
  const reduced = listOfCards.reduce((max, item) => (max += `,${item}`))
  /* eslint-enable no-param-reassign */
  await createDeck(reduced, callback)
}

export default submitCardsToDeck
