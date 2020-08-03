import React from 'react'
import { Paper, Box } from '@material-ui/core'

function EmptyCard() {
  return (
    <Paper className='game-card'>
      <Box className='empty-pattern' />
    </Paper>
  )
}

export default EmptyCard
