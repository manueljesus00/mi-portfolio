import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './components/Navbar'

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-8">
      <section id='about' className="mb-8">
        <About />
      </section>
      <section id='experience' className="mb-8">
        <Experience />
      </section>
      <section id='skills' className="mb-8">
        <Skills />
      </section>
      <section id='education' className="mb-8">
        <Education />
      </section>
    </div>

    </>
  )
}

export default App
