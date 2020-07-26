import React, { useState } from 'react'
import { IconButton, SwipeableDrawer } from '@material-ui/core'
import { MdSettings } from 'react-icons/md'
import Settings from './Settings'

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <SwipeableDrawer anchor='left' open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
        <Settings />
      </SwipeableDrawer>
      <header>
        <IconButton className='settings' onClick={() => setOpen(true)} aria-label='opções'>
          <MdSettings />
        </IconButton>
      </header>
    </>
  )
}

export default Header
