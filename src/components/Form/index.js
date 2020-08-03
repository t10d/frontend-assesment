import React from 'react'
import { Grid } from '@material-ui/core'
import Select from './Select'
import Pivot from './Pivot'
import Buttons from './Buttons'

function Form() {
  return (
    <>
      <Grid style={{ width: '75%', flexWrap: 'wrap', minWidth: 500, justifyContent: 'center' }} item xs={10}>
        <Select />
      </Grid>
      <Grid style={{ flexGrow: 1, maxWidth: '100%' }} item xs={2}>
        <Pivot />
      </Grid>
      <Grid item xs={12}>
        <Buttons />
      </Grid>
    </>
  )
}

export default Form
