import About from "./components/About"
import BlurBg from "./components/BlurBg"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

const App = () => {
  return (
   <>
   <BlurBg />
   <Navbar />
   <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10" >
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
   </main>
   
   </>
  )
}

export default App