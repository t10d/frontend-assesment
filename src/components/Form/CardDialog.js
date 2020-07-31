import {
  Button,
  Dialog,
  DialogTitle,
  Divider,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { addNewCard, changePivot } from 'actions'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import suits from 'utils/js/suits'
import values from 'utils/js/values'
import Messages from '../Messages'

const suitOrder = suits()
const valueOrder = values()

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

function CardDialog({ open, onClose, selected = null, pivot = false }) {
  const classes = useStyles()
  const [option, setOption] = useState({ suit: '', value: '' })
  const [error, setError] = useState(false)
  const { cards } = useSelector((state) => state)

  useEffect(() => {
    setOption({ suit: '', value: '' })
  }, [open])

  function submitPivot() {
    onClose()
    return changePivot(option)
  }

  function submitCard() {
    const found = cards.find((card) => card.value === option.value && card.suit === option.suit)
    if (found) {
      setError('Carta já adicionada anteriormente')
      return {}
    }
    onClose()
    return addNewCard(selected, option)
  }

  function handleSubmit() {
    if (!option.suit || !option.value) {
      setError('Selecione um NAIPE e um VALOR')
      return {}
    }
    return pivot ? submitPivot() : submitCard()
  }

  return (
    <>
      <Dialog onClose={onClose} aria-labelledby='simple-dialog-title' open={open}>
        <DialogTitle id='simple-dialog-title'>Selecione a Carta</DialogTitle>
        <List style={{ width: 300 }}>
          <ListItem>
            <FormControl variant='filled' className={classes.formControl}>
              <InputLabel id='demo-simple-select-filled-label'>Naipe</InputLabel>
              <Select
                labelId='demo-simple-select-filled-label'
                id='demo-simple-select-filled'
                value={option.suit}
                onChange={(e) => setOption({ suit: e.target.value, value: option.value })}
              >
                {suitOrder.map((suitOption) => (
                  <MenuItem key={suitOption.value} value={suitOption.value}>
                    {suitOption.ptbr}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </ListItem>
          <ListItem>
            <FormControl variant='filled' className={classes.formControl}>
              <InputLabel id='demo-simple-select-filled-label'>Valor</InputLabel>
              <Select
                labelId='demo-simple-select-filled-label'
                id='demo-simple-select-filled'
                value={option.value}
                onChange={(e) => setOption({ suit: option.suit, value: e.target.value })}
              >
                {valueOrder.map((valueOption) => (
                  <MenuItem key={valueOption.value} value={valueOption.code}>
                    {valueOption.ptbr}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </ListItem>
          <ListItem>
            <Divider variant='fullWidth' />
          </ListItem>
          <ListItem style={{ justifyContent: 'flex-end' }}>
            <Button
              disabled={!option.suit || !option.value}
              onClick={() => handleSubmit()}
              variant='contained'
              color='primary'
            >
              Selecionar
            </Button>
          </ListItem>
        </List>
      </Dialog>
      {error && <Messages onClose={() => setError(false)} severity='error' open={error !== false} message={error} />}
    </>
  )
}

CardDialog.propTypes = {
  open: PropTypes.bool,
  pivot: PropTypes.bool,
  selected: PropTypes.number,
  onClose: PropTypes.func
}

export default CardDialog
