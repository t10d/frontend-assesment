import React from 'react'
import { Grid, Box } from '@material-ui/core'
import Form from './Form'
import Result from './Result'

function Layout() {
  return (
    <Box className='layout'>
      <Grid container>
        <Form />
        <Grid item xs={12}>
          <Result />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Layout
