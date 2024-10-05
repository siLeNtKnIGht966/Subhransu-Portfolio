import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      
    </div>
  )
}

export default App
