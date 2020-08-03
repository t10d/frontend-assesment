import { Box, Button } from '@material-ui/core'
import { changePivot, setDeck, setResultList, setRotated, setResultOrdered } from 'actions'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getCardList, shufleCardsList } from 'services/result'
import { checkPivot, rotateCardsFromPivot, sortBySuit, sortByValue, transformOldListofCards } from 'utils/functions/Result'
import Messages from '../Messages'
import Fullhouses from './Fullhouses'
import Ordered from './Ordered'

function Result(props) {
  const [error, setError] = useState(false)
  const { id, pivot } = props.computedMatch.params
  const validPivot = checkPivot(pivot)
  const visual = useSelector((state) => state.settings.visual)
  const oldOrdered = useSelector((state) => state.result.ordered)
  const oldCards = useSelector((state) => state.cards)

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

  function getBack() {
    window.location.href = '/'
  }
  changePivot(validPivot)
  if (validPivot === false) {
    return <Messages onClose={() => true} severity='error' open={true} message={'Carta de Rotação inválida'} />
  }

  if (oldOrdered.length === 0 && oldCards.every((card) => card.suit === null && card.value === null)) {
    shufleCardsList(id, shuffleCallback)
  }

  if (oldOrdered.length === 0 && !oldCards.every((card) => card.suit === null && card.value === null)) {
    const cards = transformOldListofCards(oldCards)
    const rotated = rotateCardsFromPivot(validPivot)
    setRotated(rotated)
    setResultList(cards)
    startSorting(rotated, cards)
  }

  return (
    <Box
      className={`cards-visual-${visual}`}
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}
    >
      <Button onClick={() => getBack()} variant='contained' style={{ justifySelf: 'flex-start', width: '100%' }}>
        Voltar
      </Button>
      <Box className='form-result'>
        <Ordered />
        <Fullhouses />
      </Box>
      {error && <Messages onClose={() => setError(false)} severity='error' open={error !== false} message={error} />}
    </Box>
  )
}

Result.propTypes = {
  computedMatch: PropTypes.object
}

export default Result
