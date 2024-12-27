import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import ScrollToTop from "react-scroll-to-top"

const App = () =>{
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Education/>
    <Project/>
    <Contact/>
    <Footer/>
    <ScrollToTop smooth/>
    </>
  )
}

export default App