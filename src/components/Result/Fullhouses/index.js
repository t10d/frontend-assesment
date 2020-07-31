import React from 'react'
import { useSelector } from 'react-redux'
import { Box } from '@material-ui/core'
import { formDuples, formTriples, formFullhouses } from 'services/fullhouses'
import { Alert } from '@material-ui/lab'
import InitialCards from '../../Cards/InitialsCard'

function Fullhouses() {
  const {
    result: { best, ordered }
  } = useSelector((state) => state)
  if (!best || !ordered) {
    return <></>
  }
  const duples = formDuples(ordered)
  const triples = formTriples(ordered, duples)
  const fullHouses = formFullhouses(duples, triples)
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', margin: '20px 0px' }}>
      <h2 style={{ color: '#fff' }}>FullHouse Lista</h2>
      <Box className='fullhouses-box'>
        {fullHouses.map((list) => (
          <Box
            style={{ display: 'flex', width: '100%', justifyContent: 'center' }}
            className='cards-of-full'
            key={list}
          >
            {list.map((card) => (
              <InitialCards key={card} inital={card} />
            ))}
          </Box>
        ))}
        {fullHouses.length === 0 && <Alert severity='error'>Não há combinações FULLHOUSE</Alert>}
      </Box>
    </Box>
  )
}

export default Fullhouses
