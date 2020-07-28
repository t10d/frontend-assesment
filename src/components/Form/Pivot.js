import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, Button } from '@material-ui/core'
import Cards from '../Cards'
import CardDialog from './CardDialog'

function Pivot() {
  const { pivot } = useSelector((state) => state)
  const [open, setOpen] = useState(false)
  return (
    <>
      <Box className='form-pivot'>
        <Button className='new-card-button' onClick={() => setOpen(true)}>
          <Cards card={pivot} />
        </Button>
      </Box>
      <CardDialog open={open} onClose={() => setOpen(false)} pivot={true} />
    </>
  )
}

export default Pivot
