import { Box, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import suitOrder from 'utils/json/suitOrder.json'

function RegularCard({ card }) {
  const suitObj = suitOrder.find((suit) => suit.value === card.suit)
  return (
    <Paper style={{ position: 'relative', color: suitObj.color }} className='game-card'>
      <Box className='card-value1'>{card.value}</Box>
      <Box className='suit'>
        <img alt='card' src={`/suits/${card.suit}.png`} />
      </Box>
      <Box className='card-value2'>{card.value}</Box>
    </Paper>
  )
}

RegularCard.propTypes = {
  card: PropTypes.object
}

export default RegularCard
