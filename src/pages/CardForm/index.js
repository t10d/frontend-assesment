import React, { useEffect, useState } from 'react';
import { Card, Deck } from '../../components'
import './style.css'
import { getDeckId, getCards, getRotationCard } from '../../actions/cardActions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CardForm({ getDeckId, getCards, getRotationCard, isLoading, cards, rotationCard, loadingRotation }) {
  
  const [transition, setTransition] = useState(false)

  const history = useHistory()

  useEffect(() => {
    loadCards()
  }, [])

  const loadCards = async () => {
    await getDeckId()
    await getCards()
    await getRotationCard()
  }

  const nextPage = () => {
    setTransition(true)
    setTimeout(() => {
      history.push('/pile')
    }, 2000)
  }

  if (!isLoading) {
    return (
      <>
        <div className={transition ? 'active-transition': ''} />
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
          <button className="next-button" onClick={nextPage}>Go to Deck</button>
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