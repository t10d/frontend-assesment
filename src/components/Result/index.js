import { Box } from '@material-ui/core'
import { changePivot, setDeck, setResultList, setRotated, setResultOrdered } from 'actions'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import {
  checkPivot,
  getCardList,
  rotateCardsFromPivot,
  shufleCardsList,
  sortBySuit,
  sortByValue
} from 'services/result'
import Messages from '../Messages'

function Result(props) {
  const [error, setError] = useState(false)
  const { id, pivot } = props.computedMatch.params
  const validPivot = checkPivot(pivot)

  function startSorting(rotated, cards) {
    const sortedBySuit = sortBySuit(cards, rotated.suits)
    const sorted = sortByValue(sortedBySuit, rotated.cards)
    setResultOrdered(sorted)
  }

  function getCardsCallback(response) {
    if (!response.data) {
      return false
    }
    const { cards } = response.data
    const rotated = rotateCardsFromPivot(validPivot)
    setRotated(rotated)
    setResultList(cards)
    return startSorting(rotated, cards)
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
