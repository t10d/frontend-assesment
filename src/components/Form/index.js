import React from 'react'
import { Grid } from '@material-ui/core'
import Select from './Select'
import Pivot from './Pivot'
import Buttons from './Buttons'

function Form() {
  return (
    <>
      <Grid item xs={10}>
        <Select />
      </Grid>
      <Grid item xs={2}>
        <Pivot />
      </Grid>
      <Grid item xs={12}>
        <Buttons />
      </Grid>
    </>
  )
}

export default Form
