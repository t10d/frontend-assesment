import React from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import { setDeck } from 'actions'

function Result(props) {
  const { id } = props.computedMatch.params
  setDeck(id)
  return <Box className='form-result'>...</Box>
}

Result.propTypes = {
  computedMatch: PropTypes.object
}

export default Result
