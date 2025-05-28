import About from "./components/About/about"
import Contact from "./components/Contact/contact"
import ExperiencePage from "./components/Experience/experience-page"
import { Home } from "./components/Home/Home"
import Skills from "./components/Skills/skills"

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950"> 
      <Home />
      <About />
      <Skills />
      <ExperiencePage />
      <Contact />
    </div>
  )
}

export default App