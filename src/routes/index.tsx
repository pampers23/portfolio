import { createFileRoute } from '@tanstack/react-router'
import Home from '@/components/Home/Home'
import About from '@/components/About/about'
import Projects from '@/components/Projects/projects'
import ExperiencePage from '@/components/Experience/experience-page'
// import Contact from '@/components/Contact/contact'

export const Route = createFileRoute('/')({
  component: IndexRoute,
})

function IndexRoute() {
  return (
    <div>
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><ExperiencePage /></section>
      {/* <section id="contact"><Contact /></section> */}
    </div>
  )
}
