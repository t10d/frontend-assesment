import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Box, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { resetCards, randomCards } from 'actions'
import submitCardsToDeck from 'services/submit'
import Messages from '../Messages'

const defaultError = { message: false, severity: 'error' }

function Buttons() {
  const history = useHistory()
  const cards = useSelector((state) => state.cards)
  const pivot = useSelector((state) => state.pivot)
  const [error, setError] = useState(defaultError)

  function submitCallBack(response) {
    const { data = false } = response
    if (data) {
      const pivotString = pivot.value + pivot.suit
      setError({ message: 'Baralho Salvo', severity: 'success' })
      history.push(`/deck/${data.deck_id}/${pivotString}`)
      return
    }
    setError({ message: 'Falha ao salvar baralho', severity: 'error' })
  }

  function onsubmit() {
    const list = cards.filter((card) => card.value !== null && card.suit !== null)
    if (list.length === 0 || pivot.value === null) {
      setError({ message: 'Sem Cartas Definidas', severity: 'error' })
      return
    }
    submitCardsToDeck(cards, submitCallBack)
  }
  return (
    <>
      <Box className='form-buttons'>
        <Box>
          <Button onClick={() => randomCards()} variant='contained' color='default'>
            Lista Aleatória
          </Button>
          <Button onClick={() => resetCards()} variant='contained' color='secondary'>
            Limpar Cartas
          </Button>
        </Box>
        <Button variant='contained' onClick={onsubmit} color='primary'>
          Enviar Cartas
        </Button>
      </Box>
      {error.message !== false && (
        <Messages
          onClose={() => setError(defaultError)}
          severity={error.severity}
          open={error.message !== false}
          message={error.message}
        />
      )}
    </>
  )
}

export default Buttons
