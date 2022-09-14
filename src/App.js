import React from 'react'
import Navbar from '../src/components/Navbar/Navbar'
import AboutMe from './components/AboutMe/AboutMe'
import Footer from './components/Footer/Footer'
import GetInTouch from './components/GetInTouch/GetInTouch'
import LandingPage from './components/LandingPage/LandingPage'
import WhoAmi from './components/LandingPage/WhoAmi/WhoAmi'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'


const App = () => {
  

  return (
    <div>
      <Navbar />
      <LandingPage />
      <WhoAmi />
      <Projects />
      <Skills />
      <GetInTouch />
    </div>
  )
}

export default App