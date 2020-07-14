import React, { useState, useEffect } from 'react';
import api from './services/api'
import Card from './components/Card'
import './App.css'
import { getDeckId, getCards, getRotationCard } from './actions/cardActions';
import { connect } from 'react-redux';

function App({ getDeckId, getCards, getRotationCard, isLoading, cards, rotationCard }) {
  
  useEffect(() => {
    loadCards()
  }, [])

  const loadCards = async () => {
    //const response = await api.get('new/shuffle')

    //const cards = await api.get(`${response.data.deck_id}/draw/?count=10`)
    //setCards(cards.data.cards)

    //const rotationCardRequest = await api(`${response.data.deck_id}/draw/?count=1`)
    //console.log(rotationCardRequest.data.cards[0])
    //setRotationCard(rotationCardRequest.data.cards[0])

    await getDeckId()
    await getCards()
    await getRotationCard()
  }


  if (!isLoading) {
    console.log(cards)
    console.log(rotationCard)
    return (
      <div className="App">
        {
          cards.map(card => (
            <Card key={card.code} number={card.value} suit={card.suit} />
          ))
        }
        {
          rotationCard.value ?
            <Card number={rotationCard.value} suit={rotationCard.suit} />
            : <></>
        }
      </div>
    );
  }

  return <h2>Loading</h2>
}

const mapStateToProps = state => ({
  cards: state.cardsReducer.cards,
  rotationCard: state.cardsReducer.rotationCard,
  isLoading: state.cardsReducer.isLoading
})

const mapDispatchToProps = { getDeckId, getCards, getRotationCard }

export default connect(mapStateToProps, mapDispatchToProps)(App)