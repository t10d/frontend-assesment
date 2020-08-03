import React from 'react'
import PropTypes from 'prop-types'
import RegularCard from './RegularCard'

function InitialsCard({ inital }) {
  const card = { value: inital.charAt(0), suit: inital.charAt(1) }
  return <RegularCard card={card}></RegularCard>
}

InitialsCard.propTypes = {
  inital: PropTypes.string
}

export default InitialsCard
