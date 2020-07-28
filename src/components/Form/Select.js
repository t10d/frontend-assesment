import React, { useState } from 'react'
import { Box, Button } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Cards from '../Cards'
import CardDialog from './CardDialog'

function Select() {
  const { cards } = useSelector((state) => state)
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  function onCardClick(value) {
    setSelected(value)
    setOpen(true)
  }

  return (
    <>
      <Box className='form-select'>
        {cards.map((card, k) => (
          <Button key={k} className='new-card-button' onClick={() => onCardClick(k)}>
            <Cards key={k} card={card} />
          </Button>
        ))}
      </Box>
      <CardDialog open={open} onClose={() => setOpen(false)} selected={selected} pivot={false} />
    </>
  )
}

export default Select
