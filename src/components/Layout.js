import React from 'react'
import { Grid, Box } from '@material-ui/core'

function Layout() {
  return (
    <Box className='layout'>
      <Grid container>
        <Grid item xs={10}>
          <Box className=''>Cards Selecionados</Box>
        </Grid>
        <Grid item xs={2}>
          <Box className=''>Pivot</Box>
        </Grid>
        <Grid item xs={12}>
          <Box className=''>Botões</Box>
        </Grid>
        <Grid item xs={12}>
          <Box className=''>Resultado</Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Layout
