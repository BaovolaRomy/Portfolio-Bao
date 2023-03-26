import { Container } from 'postcss'
import { useState } from 'react'
import Main from './components/Main'
import Profile from './components/Profile'
import Work from './components/Work'
import Sidenav from './components/Sidenav'
import Studies from './components/Studies'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Profile />
      <Work />
      {/* <Studies /> */}
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
