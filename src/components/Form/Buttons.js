import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, Button } from '@material-ui/core'
import { resetCards } from 'actions'
import submitCardsToDeck from 'services/submit'
import Messages from '../Messages'

function Buttons() {
  const { cards, pivot } = useSelector((state) => state)
  const [error, setError] = useState(false)
  const [severity, setSeverity] = useState('error')

  function submitCallBack(response) {
    const { data = false } = response
    if (data) {
      const pivotString = pivot.value + pivot.suit
      setSeverity('success')
      setError('Baralho Salvo')
      window.location.href = `/deck/${data.deck_id}/${pivotString}`
      return
    }
    setSeverity('error')
    setError('Falha ao salvar baralho')
  }

  function onsubmit() {
    const list = cards.filter((card) => card.value !== null && card.suit !== null)
    if (list.length === 0 || !pivot.value) {
      setError('Sem Cartas Definidas')
    }
    submitCardsToDeck(cards, submitCallBack)
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
      {error && <Messages onClose={() => setError(false)} severity={severity} open={error !== false} message={error} />}
    </>
  )
}

export default Buttons
