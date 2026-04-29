import About from "./components/About/about"
import Background from "./components/background"
import Contact from "./components/Contact/contact"
import ExperiencePage from "./components/Experience/experience-page"
// import Footer from "./components/Footer/footer"
import Home from "./components/Home/Home"
import NavbarMenu from "./components/Navbar/Navbar"
import { ThemeProvider } from "./components/theme-provider"
import Projects from "./components/Projects/projects"

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen relative">
        <Background />
        <NavbarMenu />

        <section id="home" className="pt-20 sm:pt-24"><Home /></section>
        <section id="about" className="pt-20 sm:pt-24"><About /></section>

        <section id="projects" className="pt-20 sm:pt-24"><Projects /></section>
        <section id="experience" className="pt-20 sm:pt-24"><ExperiencePage /></section>
        <section id="contact" className="pt-20 sm:pt-24"><Contact /></section>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  )
}

export default App