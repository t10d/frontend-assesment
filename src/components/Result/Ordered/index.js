import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@material-ui/core'
import InitialCards from '../../Cards/InitialsCard'

function Ordered() {
  const {
    result: { best, ordered }
  } = useSelector((state) => state)
  return (
    <Box className='ordered-box'>
      {best && (
        <Box className='ssj-card'>
          <h2>Carta SSJ</h2>
          <InitialCards inital={best} />
        </Box>
      )}
      {ordered && best && (
        <Box className='ordered-cards-box'>
          <h2 style={{ color: '#fff' }}>Cartas em ordem</h2>
          <Box className='list-ordered'>
            {ordered.map((card) => (
              <InitialCards key={card} inital={card} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default Ordered
