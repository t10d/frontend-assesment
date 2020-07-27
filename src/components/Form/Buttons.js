import React from 'react'
import { Box, Button } from '@material-ui/core'

function Buttons() {
  return (
    <Box className='form-buttons'>
      <Button variant='contained' color='secondary'>
        Reiniciar
      </Button>
      <Button variant='contained' color='primary'>
        Postar
      </Button>
    </Box>
  )
}

export default Buttons
