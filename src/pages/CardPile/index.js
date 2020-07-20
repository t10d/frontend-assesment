import React, { useEffect } from 'react'
import { orderCardsBasedOnRotationCard } from '../../actions/cardActions'
import { connect } from 'react-redux';
import Card from '../../components/Card/index';
import './style.css'

function CardPile({ orderCardsBasedOnRotationCard, cards, isLoading }) {
  useEffect(() => {
    orderCardsBasedOnRotationCard()
  }, [])

  if (isLoading) {
    return <h2>Loading</h2>
  }

  return (
    <>
      <div className='desactive-transition'/>
      <div className="App">
        {
            cards.map(card => (
              <Card key={card.code} number={card.value} suit={card.suit} />
            ))
          }
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  cards: state.cardsReducer.cards,
  rotationCard: state.cardsReducer.rotationCard,
  isLoading: state.cardsReducer.isLoading
})

const mapDispatchToProps = { orderCardsBasedOnRotationCard }

export default connect(mapStateToProps, mapDispatchToProps)(CardPile)