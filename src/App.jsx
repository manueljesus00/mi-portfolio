import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-dark text-slate-300 min-h-screen">
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <footer className="border-t border-dark-border py-6 text-center text-slate-600 text-xs font-mono">
        © 2026 Manuel Jesús Flores Montaño
      </footer>
    </div>
  )
}

export default App

