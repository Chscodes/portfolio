import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import EducationAwards from './components/EducationAwards'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <EducationAwards />
      </main>
      <Footer />
    </div>
  )
}

export default App
