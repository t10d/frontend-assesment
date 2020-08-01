import suitFunc from '../js/suits'
import valueFunc from '../js/values'

const suitOrder = suitFunc()
const valueOrder = valueFunc()

const validCard = (card) => {
  const value = card.charAt(0)
  const suit = card.charAt(1)
  const suitObj = suitOrder.find((el) => el.value === suit)
  const valueObj = valueOrder.find((el) => el.code === value)
  return suitObj && valueObj ? { suit, value } : false
}

export const checkPivot = (pivot) => validCard(pivot)

const rotateValues = (list, pivot) => {
  const value = list.pop()
  const rotatedValues = [value, ...list]
  return rotatedValues[0].code === pivot.value ? rotatedValues : rotateValues(rotatedValues, pivot)
}

const rotateSuits = (list, pivot) => {
  const suit = list.pop()
  const rotatedSuits = [suit, ...list]
  return rotatedSuits[0].value === pivot.suit ? rotatedSuits : rotateSuits(rotatedSuits, pivot)
}

export const rotateCardsFromPivot = (pivot) => {
  const cards = rotateValues(valueOrder, pivot)
  const suits = rotateSuits(suitOrder, pivot)
  return { cards, suits }
}

export const sortBySuit = (list, suits) => {
  const orderedSuit = [[], [], [], []]
  suits.forEach((suit, sKey) => {
    list.forEach((element) => {
      if (element.suit === suit.name) {
        orderedSuit[sKey].push(element.code)
      }
    })
  })
  return orderedSuit
}

export const sortByValue = (list, values) => {
  let ordered = []
  list.forEach((suitArray) => {
    values.forEach((cardValue) => {
      suitArray.forEach((card) => {
        if (cardValue.code === card.charAt(0)) {
          ordered = [...ordered, card]
        }
      })
    })
  })
  return ordered
}

export const transformOldListofCards = (cards) => {
  const filteredCards = cards.filter((card) => card.value !== null && card.suit != null)
  const list = filteredCards.map((card) => {
    const cardSuit = suitOrder.find((suit) => suit.value === card.suit)
    return { code: `${card.value}${card.suit}`, value: card.value, suit: cardSuit.name }
  })
  return list
}
