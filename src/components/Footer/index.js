import React from 'react'
import { Chip, Link } from '@material-ui/core'
import { FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <Link target='_blank' href='https://github.com/diogorg'>
        <Chip style={{ marginRight: 15 }} clickable={true} icon={<FaGithub />} label='Diogo Gutierre'></Chip>
      </Link>
    </footer>
  )
}

export default Footer
