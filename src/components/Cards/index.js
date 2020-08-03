import React from 'react'
import PropTypes from 'prop-types'
import EmptyCard from './EmptyCard'
import RegularCard from './RegularCard'

function Cards({ card }) {
  const { value, suit } = card
  return !value || !suit ? <EmptyCard card={card} /> : <RegularCard card={card} />
}

Cards.propTypes = {
  card: PropTypes.object
}

export default Cards
