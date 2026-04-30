import About from "./components/About/about"
import Background from "./components/background"
import Contact from "./components/Contact/contact"
import ExperiencePage from "./components/Experience/experience-page"
import {Footer} from "./components/Footer/footer"
import Home from "./components/Home/Home"
import NavbarMenu from "./components/Navbar/Navbar"
import { ThemeProvider } from "./components/theme-provider"
import Projects from "./components/Projects/projects"
import Loader from "./components/loader"
import { useEffect, useState } from "react"




const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // adjust time

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen relative z-10">
        
        <Background />

        <NavbarMenu />

        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><ExperiencePage /></section>
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App