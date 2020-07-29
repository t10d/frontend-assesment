import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, Button } from '@material-ui/core'
import { resetCards } from 'actions'
import Messages from '../Messages'

function Buttons() {
  const { cards, pivot } = useSelector((state) => state)
  const [error, setError] = useState(false)

  function onsubmit() {
    const list = cards.filter((card) => card.value !== null && card.suit !== null)
    if (list.length === 0 || !pivot.value) {
      setError('Sem Cartas Definidas')
    }
  }
  return (
    <>
      <Box className='form-buttons'>
        <Button onClick={() => resetCards()} variant='contained' color='secondary'>
          Limpar Cartas
        </Button>
        <Button variant='contained' onClick={onsubmit} color='primary'>
          Enviar Cartas
        </Button>
      </Box>
      {error && <Messages onClose={() => setError(false)} severity='error' open={error !== false} message={error} />}
    </>
  )
}

export default Buttons
