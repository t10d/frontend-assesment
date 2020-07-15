export function orderHandCards(suits, numbers, cards) {
  let orderedArray = []
  const firstSuits = cards.filter(card => card.suit.toLowerCase() === suits[0])
  const secondSuits = cards.filter(card => card.suit.toLowerCase() === suits[1])
  const thirdSuits = cards.filter(card => card.suit.toLowerCase() === suits[2])
  const fourthSuits = cards.filter(card => card.suit.toLowerCase() === suits[3])

  orderedArray = orderedArray.concat(matchCardNumbers(numbers, firstSuits))
  orderedArray = orderedArray.concat(matchCardNumbers(numbers, secondSuits))
  orderedArray = orderedArray.concat(matchCardNumbers(numbers, thirdSuits))
  orderedArray = orderedArray.concat(matchCardNumbers(numbers, fourthSuits))

  return orderedArray
} 

function matchCardNumbers(numbers, cards) {
  let newArray = []

  numbers.forEach(number => {
    cards.forEach(card => {
      const value = getCardValue(card.value)
      if (number === value) {
        newArray = [...newArray, card]
      }
    })
  })

  return newArray
}

export function rearangeArray(array, pivot) {
  const arrayCopy = [...array]
  const index = arrayCopy.findIndex(x => x === pivot)
  const arrayAux = arrayCopy.splice(0, index)
  const newArray = arrayCopy.concat(arrayAux)

  return newArray
}

export function getCardValue(number) {
  return /^[a-zA-Z]+$/.test(parseInt(number)) ? number[0] : number
}