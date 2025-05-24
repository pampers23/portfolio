import About from "./components/About/about"
import { Home } from "./components/Home/Home"

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Home />
      <About />
    </div>
  )
}

export default App