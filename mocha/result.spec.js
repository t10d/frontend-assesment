import chai from 'chai'
import { checkPivot, rotateCardsFromPivot, sortBySuit, sortByValue } from '../src/utils/functions/Result'
import { expectedRotated, listToOrder, expectedSortBySuit, expectedSortByValue } from './vars'

describe('RESULT FUNCTIONS', () => {
  it('1. Check Pivot', (done) => {
    chai.expect(checkPivot('XX')).to.be.equals(false)
    chai.expect(checkPivot('5I')).to.be.equals(false)
    chai.expect(checkPivot('IH')).to.be.equals(false)
    const p = checkPivot('KC')
    chai.expect(p.value).to.be.equals('K')
    chai.expect(p.suit).to.be.equals('C')
    done()
  })
  it('2. Rotate From Pivot', (done) => {
    const pivot = { value: '8', suit: 'H' }
    const { cards, suits } = rotateCardsFromPivot(pivot)
    suits.forEach((suit, key) => {
      chai.expect(suit.name).to.be.equals(expectedRotated.suits[key].name)
    })
    cards.forEach((card, key) => {
      chai.expect(card.value).to.be.equals(expectedRotated.cards[key].value)
    })
    done()
  })
  it('3. Sort By Suit', (done) => {
    const result = sortBySuit(listToOrder, expectedRotated.suits)
    chai.expect(result).to.be.eql(expectedSortBySuit)
    done()
  })
  it('4. Sort By Value', (done) => {
    const result = sortByValue(expectedSortBySuit, expectedRotated.cards)
    chai.expect(result).to.be.eql(expectedSortByValue)
    done()
  })
}).timeout(5000)
