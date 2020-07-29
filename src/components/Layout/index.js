import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, Box } from '@material-ui/core'
import Form from '../Form'

function Layout() {
  const { visual } = useSelector((state) => state)
  return (
    <Box className='layout'>
      <Grid container className={`cards-visual-${visual}`}>
        <Form />
      </Grid>
    </Box>
  )
}

export default Layout
