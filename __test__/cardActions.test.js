const { rearangeArray, orderHandCards, getCardValue } = require('../src/actions/gameFunctions')
const { numberSequence, suitSequence } = require('../src/actions/cardTypes')

describe('Test reorder of arrays', () => {
  test('Check input 1 order', () => {
    let rotationCard = {value: "2", suit: "hearts"}
    let cards = [
      {value: "7", suit:"diamonds"},
      {value: "ACE", suit:"spades"},
      {value: "QUEEN", suit:"hearts"},
      {value: "9", suit:"spades"},
      {value: "6", suit:"diamonds"},
    ]
  
    let waited = [
      {value: "QUEEN", suit:"hearts"},
      {value: "7", suit:"diamonds"},
      {value: "6", suit:"diamonds"},
      {value: "ACE", suit:"spades"},
      {value: "9", suit:"spades"},
      
    ]
    
    const pivot = getCardValue(rotationCard.value)
    expect(rearangeArray([...numberSequence], pivot)).toEqual(numberSequence)
  
    expect(rearangeArray([...suitSequence], rotationCard.suit.toLowerCase())).toEqual(['hearts', 'diamonds', 'clubs', 'spades'])
  
    expect(
      orderHandCards(rearangeArray([...suitSequence], rotationCard.suit.toLowerCase()), 
      rearangeArray([...numberSequence], pivot), 
      cards)
    ).toEqual(waited)
  })
  
  test('Check input 2 order', () => {
    let rotationCard = {value: "10", suit: "clubs"}
    let cards = [
      {value: "7", suit:"diamonds"},
      {value: "ACE", suit:"spades"},
      {value: "QUEEN", suit:"hearts"},
      {value: "9", suit:"spades"},
      {value: "6", suit:"diamonds"},
    ]
  
    let waited = [
      {value: "9", suit:"spades"},
      {value: "ACE", suit:"spades"},
      {value: "QUEEN", suit:"hearts"},
      {value: "7", suit:"diamonds"},
      {value: "6", suit:"diamonds"},
    ]
    
    const pivot = getCardValue(rotationCard.value)
    expect(rearangeArray([...numberSequence], pivot)).toEqual(["10","9","8","7","6","5","4","3","2","A","K","Q","J"])
  
    expect(rearangeArray([...suitSequence], rotationCard.suit.toLowerCase())).toEqual(['clubs', 'spades', 'hearts', 'diamonds'])
  
    expect(
      orderHandCards(rearangeArray([...suitSequence], rotationCard.suit.toLowerCase()), 
      rearangeArray([...numberSequence], pivot), 
      cards)
    ).toEqual(waited)
  })

  test('Check input 3 order', () => {
    let rotationCard = {value: "2", suit: "hearts"}
    let cards = [
      {value: "ACE", suit:"spades"},
      {value: "ACE", suit:"diamonds"},
      {value: "ACE", suit:"clubs"},
      {value: "KING", suit:"hearts"},
      {value: "KING", suit:"spades"},
    ]
  
    let waited = [
      {value: "KING", suit:"hearts"},
      {value: "ACE", suit:"diamonds"},
      {value: "ACE", suit:"clubs"},
      {value: "ACE", suit:"spades"},
      {value: "KING", suit:"spades"},
    ]
    
    const pivot = getCardValue(rotationCard.value)
    expect(rearangeArray([...numberSequence], pivot)).toEqual(["2","A","K","Q","J","10","9","8","7","6","5","4","3"])
  
    expect(rearangeArray([...suitSequence], rotationCard.suit.toLowerCase())).toEqual(['hearts', 'diamonds', 'clubs', 'spades'])
  
    expect(
      orderHandCards(rearangeArray([...suitSequence], rotationCard.suit.toLowerCase()), 
      rearangeArray([...numberSequence], pivot), 
      cards)
    ).toEqual(waited)
  })

  test('Check input 4 order', () => {
    let rotationCard = {value: "2", suit: "hearts"}
    let cards = [
      {value: "2", suit:"hearts"},
      {value: "2", suit:"diamonds"},
      {value: "2", suit:"clubs"},
      {value: "2", suit:"spades"},
      {value: "3", suit:"hearts"},
      {value: "3", suit:"diamonds"},
      {value: "3", suit:"clubs"},
    ]
  
    let waited = [
      {value: "2", suit:"hearts"},
      {value: "3", suit:"hearts"},
      {value: "2", suit:"diamonds"},
      {value: "3", suit:"diamonds"},
      {value: "2", suit:"clubs"},
      {value: "3", suit:"clubs"},
      {value: "2", suit:"spades"},
    ]
    
    const pivot = getCardValue(rotationCard.value)
    expect(rearangeArray([...numberSequence], pivot)).toEqual(["2","A","K","Q","J","10","9","8","7","6","5","4","3"])
  
    expect(rearangeArray([...suitSequence], rotationCard.suit.toLowerCase())).toEqual(['hearts', 'diamonds', 'clubs', 'spades'])
  
    expect(
      orderHandCards(rearangeArray([...suitSequence], rotationCard.suit.toLowerCase()), 
      rearangeArray([...numberSequence], pivot), 
      cards)
    ).toEqual(waited)
  })
})