import React, { useEffect } from 'react'
import { orderCardsBasedOnRotationCard, findFullHouse } from '../../actions/cardActions'
import { connect } from 'react-redux';
import Card from '../../components/Card/index';
import './style.css'

function CardPile({ orderCardsBasedOnRotationCard, findFullHouse, cards, isLoading }) {
  useEffect(() => {
    orderCardsBasedOnRotationCard()
    findFullHouse()
  }, [])

  if (isLoading) {
    return <h2>Loading</h2>
  }

  return (
    <div className="App">
      {
          cards.map(card => (
            <Card key={card.code} number={card.value} suit={card.suit} />
          ))
        }
    </div>
  )
}

const mapStateToProps = state => ({
  cards: state.cardsReducer.cards,
  rotationCard: state.cardsReducer.rotationCard,
  isLoading: state.cardsReducer.isLoading
})

const mapDispatchToProps = { orderCardsBasedOnRotationCard, findFullHouse }

export default connect(mapStateToProps, mapDispatchToProps)(CardPile)