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
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-8 pt-24">
      <section id='about' className="mb-8 pt-20 -mt-20">
        <About />
      </section>
      <section id='experience' className="mb-8 pt-20 -mt-20">
        <Experience />
      </section>
      <section id='skills' className="mb-8 pt-20 -mt-20">
        <Skills />
      </section>
      <section id='education' className="mb-8 pt-20 -mt-20">
        <Education />
      </section>
      <section id='projects' className="mb-8 pt-20 -mt-20">
        <Projects />
      </section>
      <section id='contact' className="mb-8 pt-20 -mt-20">
        <Contact />
      </section>
    </div>
<footer className="w-full text-center py-4 text-gray-500 text-xl pb-20">
      <p className="mb-2">Hecho con ❤️ por <a href="https://manueljesus00.github.io" target="_blank" rel="noopener noreferrer" className="underline">Manuel Jesús</a></p>
      <p className="mb-2">Si quieres ver más proyectos, visita mi perfil de <a href="https://github.com/manueljesus00" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a></p>
    </footer>
    </>
  )
}

export default App
