
import React from 'react'
import "./Contact.css"
import con from '../../assets/contactph.webp'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  useGSAP(() => {
    gsap.from(".leftcontact img", {
    x: -100,
    duration: 1,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
      trigger: ".leftcontact img",
      scroll: "body",
      scrub: 2,
      
      start: "top 80%",
      end: "top 30%"
    }
    });

    gsap.from("form", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
      trigger: "form",
      scroll: "body",
      scrub: 2,
      start: "top 80%",
      end: "top 30%"
    }
    });
    
  })

  return (
    <div id='contact'>
      <div className="leftcontact">
        <img src={con} alt="" />
      </div>
      <div className="rightcontact">
        <form action="https://formspree.io/f/xzzyzvow" method='POST'>
          <h2 className="contact-title">Let's Connect</h2>
          <input name='Username' type="text" placeholder='Your Name' required/>
          <input name='Email' type="email" placeholder='Your Email' required/>
          <textarea name="massage" id="textarea" placeholder='Tell me about the opportunity or project...' required></textarea>
          <input type="submit" id='btn' value="Send Message" />
        </form>
      </div>
    </div>
  )
}

export default Contact








