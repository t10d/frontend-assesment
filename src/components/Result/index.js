import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import { setDeck, changePivot, setResultList } from 'actions'
import { checkPivot, shufleCardsList, getCardList } from 'services/result'
import Messages from '../Messages'

function Result(props) {
  const [error, setError] = useState(false)
  const { id, pivot } = props.computedMatch.params
  const validPivot = checkPivot(pivot)
  function getCardsCallback(response) {
    setResultList(response.data.cards)
  }
  function shuffleCallback(response) {
    if (!response.data) {
      setError('Baralho Perdido')
      return
    }
    setDeck(id)
    const { remaining } = response.data
    getCardList(id, remaining, getCardsCallback)
  }

  if (validPivot === false) {
    return <Messages onClose={() => true} severity='error' open={true} message={'Carta de Rotação inválida'} />
  }
  changePivot(validPivot)
  shufleCardsList(id, shuffleCallback)
  return (
    <>
      <Box className='form-result'>...</Box>
      {error && <Messages onClose={() => setError(false)} severity='error' open={error !== false} message={error} />}
    </>
  )
}

Result.propTypes = {
  computedMatch: PropTypes.object
}

export default Result
