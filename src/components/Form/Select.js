import React from 'react'
import { Box } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Cards from '../Cards'

function Select() {
  const { cards } = useSelector((state) => state)
  return (
    <Box className='form-select'>
      {cards.map((card, k) => (
        <Cards key={k} card={card}>
          .
        </Cards>
      ))}
    </Box>
  )
}

export default Select
