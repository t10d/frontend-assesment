import React from 'react'
import '../styles/App.css'
import { Container } from '@material-ui/core'
import Layout from './Layout'
import Footer from './Footer'
import Header from './Header'

function App() {
  return (
    <>
      <Header />
      <Container maxWidth='lg' className='App'>
        <Layout></Layout>
      </Container>
      <Footer />
    </>
  )
}

export default App
