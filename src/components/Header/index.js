import React, { useState } from 'react'
import { Button, IconButton, SwipeableDrawer, Dialog, DialogTitle, List, ListItem, Divider } from '@material-ui/core'
import { MdSettings, MdLiveHelp } from 'react-icons/md'
import suits from 'utils/js/suits'
import values from 'utils/js/values'
import Settings from './Settings'

function Header() {
  const [open, setOpen] = useState(false)
  const [dialog, setDialog] = useState(false)
  /* eslint-disable no-param-reassign */
  const suitsBr = suits().reduce((max, item) => ({ ptbr: `${max.ptbr}, ${item.ptbr}` })).ptbr
  const valuesBr = values().reduce((max, item) => ({ ptbr: `${max.ptbr}, ${item.ptbr}` })).ptbr
  // {x: a.x + b.x}
  /* eslint-enable no-param-reassign */
  return (
    <>
      <SwipeableDrawer anchor='left' open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
        <Settings />
      </SwipeableDrawer>
      <Dialog onClose={() => setDialog(false)} aria-labelledby='help-dialog' open={dialog}>
        <DialogTitle id='simple-dialog-title'>Informações do uso</DialogTitle>
        <Divider variant='fullWidth' />
        <List style={{ padding: '0px 20px 30px 20px' }}>
          <ListItem>- Selecione as cartas de desejo na lista esquerda.</ListItem>
          <ListItem>- Na carta à direita escolha uma carta de rotação.</ListItem>
          <ListItem>- Clique para enviar as cartas selecionadas e rotação para o algoritmo.</ListItem>
          <ListItem>- O Software irá calcular as cartas de maior valor e colocará em ordem.</ListItem>
          <ListItem>- O Software irá calcular todas as combinações de FULLHOUSE do poker.</ListItem>
          <ListItem>- O poder das cartas é gerado em ordem primeiramente do naipe e depois de valor.</ListItem>
          <ListItem>
            - A carta de rotação modifica o poder de naipe e valor se tornando a mais forte do baralho.
          </ListItem>
          <ListItem>
            - Os demais naipes e valores estarão ordenados apartir do padrão rotacionados pela carta de rodação.
          </ListItem>
          <ListItem>- Ordem dos naipes por padrão é:</ListItem>
          <ListItem>
            <b>{suitsBr}</b>.
          </ListItem>
          <ListItem>- Ordem das cartas por padrão é:</ListItem>
          <ListItem>
            <b>{valuesBr}</b>.
          </ListItem>
          <ListItem>
            - Exemplo: se a carta de rotação for Rei de Ouro. Esta se torna a mais poderosa e Ás de Copas se torna a
            pior.
          </ListItem>
        </List>
      </Dialog>
      <header>
        <Button
          variant='contained'
          className='settings'
          onClick={() => setDialog(true)}
          aria-label='ajuda'
          disableElevation
        >
          <MdLiveHelp />
        </Button>
        <Button
          variant='contained'
          className='settings'
          onClick={() => setOpen(true)}
          aria-label='opções'
          disableElevation
        >
          <MdSettings />
        </Button>
      </header>
    </>
  )
}

export default Header
