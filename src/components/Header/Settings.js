import React from 'react'
import { Box, List, ListItem, ListItemText, ListItemIcon, Divider, ButtonGroup, Button } from '@material-ui/core'
import { MdSettings } from 'react-icons/md'

function Settings() {
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
            <Button>10</Button>
            <Button>15</Button>
            <Button>20</Button>
          </ButtonGroup>
        </ListItem>
        <ListItem>
          <ListItemText primary='Visual das Cartas' />
        </ListItem>
        <ListItem>
          <ButtonGroup fullWidth={true} variant='contained' color='primary' aria-label='contained primary button group'>
            <Button>Realista</Button>
            <Button>Minimista</Button>
          </ButtonGroup>
        </ListItem>
      </List>
    </Box>
  )
}

export default Settings
