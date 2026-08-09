import React, { useRef } from 'react'
import './Nav.css'
import {Link} from 'react-scroll'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { Download } from 'lucide-react'

const Nav = () => {
  let menu = useRef()
  let mobile = useRef()

  const closeMobileMenu = () => {
    mobile.current.classList.remove("activemobile")
    menu.current.classList.remove("activeham")
  }

  useGSAP(() => {
    let t1 = gsap.timeline()
    t1.from("nav h1", {
      duration: 1,
      y: -100,
      opacity: 0,
    })
    t1.from("nav ul li",{
      duration: 0.5,
      y: -100,
      opacity: 0,
      stagger: 1,
    })
  })


  return (
    <nav>
        <h1>PORTFOLIO</h1>
        <ul className='desktopmenu'>
            <Link to="home" activeClass='active' spy={true} smooth={true} duration={500}><li>Home</li></Link>
            <Link to="about" activeClass='active'  spy={true} smooth={true} duration={500}><li>About</li></Link>
            <Link to="resume" activeClass='active'  spy={true} smooth={true} duration={500}><li>Resume</li></Link>
            <Link to="projects" activeClass='active'  spy={true} smooth={true} duration={500}><li>Projects</li></Link>
            <Link to="contact" activeClass='active'  spy={true} smooth={true} duration={500}><li>Contact</li></Link>
        </ul>
        <a href="/resume.pdf" download className="nav-resume-btn">
          <Download size={16} /> Resume
        </a>
        <div className="hemburger" ref={menu} onClick={() => {
          mobile.current.classList.toggle("activemobile")
          menu.current.classList.toggle("activeham")
        }
        }>
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>
        <ul className='mobilemenu' ref={mobile}>
            <Link to="home" activeClass='active' spy={true} smooth={true} duration={500} onClick={closeMobileMenu}><li>Home</li></Link>
            <Link to="about" activeClass='active'  spy={true} smooth={true} duration={500} onClick={closeMobileMenu}><li>About</li></Link>
            <Link to="resume" activeClass='active'  spy={true} smooth={true} duration={500} onClick={closeMobileMenu}><li>Resume</li></Link>
            <Link to="projects" activeClass='active'  spy={true} smooth={true} duration={500} onClick={closeMobileMenu}><li>Projects</li></Link>
            <Link to="contact" activeClass='active'  spy={true} smooth={true} duration={500} onClick={closeMobileMenu}><li>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Nav
