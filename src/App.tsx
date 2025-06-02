import About from "./components/About/about"
import Contact from "./components/Contact/contact"
import ExperiencePage from "./components/Experience/experience-page"
import Footer from "./components/Footer/footer"
import { Home } from "./components/Home/Home"
import NavbarMenu from "./components/Navbar/Navbar"
import Skills from "./components/Skills/skills"



const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <NavbarMenu />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><ExperiencePage /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  )
}

export default App