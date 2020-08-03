import React from 'react'
import { Box, List, ListItem, ListItemText, ListItemIcon, Divider, ButtonGroup, Button } from '@material-ui/core'
import { MdSettings } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { changeCardsQuantity, changeCardsVisual } from 'actions'
import buttonsQuantity from './buttonsQuantity.json'
import buttonsVisual from './buttonsVisual.json'

function Settings() {
  const quantity = useSelector((state) => state.settings.quantity)
  const visual = useSelector((state) => state.settings.visual)
  return (
    <Box className='settings-box'>
      <List>
        <ListItem>
          <ListItemIcon>
            <MdSettings />
          </ListItemIcon>
          <ListItemText primary='Opções' />
        </ListItem>
        <ListItem>
          <Divider variant='fullWidth' />
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemText primary='Quantidade de Cartas' />
        </ListItem>
        <ListItem>
          <ButtonGroup fullWidth={true} variant='contained' color='primary' aria-label='contained primary button group'>
            {buttonsQuantity.map((button) => (
              <Button key={button} disabled={quantity === button} onClick={() => changeCardsQuantity(button)}>
                {button}
              </Button>
            ))}
          </ButtonGroup>
        </ListItem>
        <ListItem>
          <ListItemText primary='Visual das Cartas' />
        </ListItem>
        <ListItem>
          <ButtonGroup fullWidth={true} variant='contained' color='primary' aria-label='contained primary button group'>
            {buttonsVisual.map((button) => (
              <Button
                key={button.value}
                disabled={visual === button.value}
                onClick={() => changeCardsVisual(button.value)}
              >
                {button.text}
              </Button>
            ))}
          </ButtonGroup>
        </ListItem>
      </List>
    </Box>
  )
}

export default Settings
