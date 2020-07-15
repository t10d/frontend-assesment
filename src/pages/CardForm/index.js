import React, { useEffect } from 'react';
import { Card, Deck } from '../../components'
import './style.css'
import { getDeckId, getCards, getRotationCard } from '../../actions/cardActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function CardForm({ getDeckId, getCards, getRotationCard, isLoading, cards, rotationCard, loadingRotation }) {
  
  useEffect(() => {
    loadCards()
  }, [])

  const loadCards = async () => {
    await getDeckId()
    await getCards()
    await getRotationCard()
  }

  if (!isLoading) {
    return (
      <>
        <div className="box">
          {
            cards.map(card => (
              <Card key={card.code} number={card.value} suit={card.suit} />
            ))
          }
        </div>
        <div className="bottomBox">
          <Deck />
          {
            loadingRotation ?
              <Deck /> :
              rotationCard.value ?
                <Card number={rotationCard.value} suit={rotationCard.suit} />
                : null
          }
          <Link to="/pile">Go to Deck</Link>
        </div>
      </>
    );
  }

  return <h2>Loading</h2>
}

const mapStateToProps = state => ({
  cards: state.cardsReducer.cards,
  rotationCard: state.cardsReducer.rotationCard,
  isLoading: state.cardsReducer.isLoading,
  loadingRotation: state.cardsReducer.loadingRotation
})

const mapDispatchToProps = { getDeckId, getCards, getRotationCard }

export default connect(mapStateToProps, mapDispatchToProps)(CardForm)