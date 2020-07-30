import { Box, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import suitOrder from 'utils/json/suitOrder.json'
import valueOrder from 'utils/json/valueOrder.json'

function RegularCard({ card }) {
  const suitObj = suitOrder.find((suit) => suit.value === card.suit)
  const valueObj = valueOrder.find((v) => v.code === card.value)
  return (
    <Paper style={{ position: 'relative', color: suitObj.color }} className='game-card'>
      <Box className='card-value1'>{valueObj.card}</Box>
      <Box className='suit'>
        <img alt='card' src={`/suits/${card.suit}.png`} />
      </Box>
      <Box className='card-value2'>{valueObj.card}</Box>
    </Paper>
  )
}

RegularCard.propTypes = {
  card: PropTypes.object
}

export default RegularCard
