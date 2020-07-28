import React from 'react'
import { Box, Button } from '@material-ui/core'
import { resetCards } from '../../actions'

function Buttons() {
  return (
    <Box className='form-buttons'>
      <Button onClick={() => resetCards()} variant='contained' color='secondary'>
        Limpar Cartas
      </Button>
      <Button variant='contained' color='primary'>
        Enviar Cartas
      </Button>
    </Box>
  )
}

export default Buttons
