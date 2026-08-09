import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import Project from "./components/Project/Project"
import Resume from "./components/Resume/Resume"
import ScrollTop from "./components/ScrollTop/ScrollTop"
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Resume />
      <Project />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  )
}

export default App

