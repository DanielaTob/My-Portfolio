import React from 'react'
import About from '../views/About'
import Contact from '../views/Contact'
import Home from '../views/Home'
import Skills from '../views/Skills'
import Work from '../views/Work'

export default function Landing() {
  return (
    <div>
        <Home />
        <Work /> 
        <Skills />
        <About />
        <Contact />
    </div>
  )
}
