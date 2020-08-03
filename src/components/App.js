import React from 'react'
import '../styles/App.css'
import { Container } from '@material-ui/core'
import Footer from './Footer'
import Header from './Header'
import Routes from './Routes'

function App() {
  return (
    <>
      <Header />
      <Container maxWidth='lg' className='App'>
        <Routes />
      </Container>
      <Footer />
    </>
  )
}

export default App
