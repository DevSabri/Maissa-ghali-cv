import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Cv from './components/cv/Cv'
import Divers from './components/divers/Divers'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Cv />
      <Divers />
      <Contact />
      <Footer />
    </>
  )
}

export default App