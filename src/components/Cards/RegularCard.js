import { Box, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import suitsDefault from 'utils/js/suits'
import valuesDefault from 'utils/js/values'

const suits = suitsDefault()
const values = valuesDefault()

function RegularCard({ card }) {
  const suitObj = suits.find((suit) => suit.value === card.suit)
  const valueObj = values.find((v) => v.code === card.value)
  if (!suitObj || !valueObj) {
    return <></>
  }
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
