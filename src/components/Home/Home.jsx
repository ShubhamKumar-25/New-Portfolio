import React from "react";
import "./Home.css";
import man from "../../assets/man.webp";
import { TypeAnimation } from "react-type-animation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import { Download } from "lucide-react";

const Home = () => {
  useGSAP(() => {
    let t2 = gsap.timeline();
    t2.from(".line1", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    t2.from(".line2", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    t2.from(".line3", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    t2.from(".home-btns", {
      y: 40,
      duration: 0.8,
      opacity: 0,
    });
    gsap.from(".righthome img", {
      x: 200,
      duration: 1,
      opacity: 0,
    });
  });

  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="availability-badge">
            <span className="pulse-dot"></span> Open to opportunities
          </div>
          <div className="line1">I'M</div>
          <div className="line2">SHUBHAM KUMAR</div>
          <div className="line3">
            <TypeAnimation
              sequence={[
                "WEB DEVELOPER",
                1000,
                "FULL STACK DEVELOPER",
                1000,
                "MERN STACK DEVELOPER",
                1000,
                "SOFTWARE DEVELOPER",
                1000,
                "SOFTWARE ENGINEER",
                1000,
                "EDITOR",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              style={{
                color: "#42AED9",
                fontWeight: "bold",
                fontSize: "1.2em",
              }}
            />
          </div>

          <div className="home-btns">
            <Link to="contact" spy={true} smooth={true} duration={500}>
              <button className="btn-primary">HIRE ME</button>
            </Link>
            <a href="/resume.pdf" download className="btn-outline">
              <Download size={18} /> RESUME
            </a>
          </div>
        </div>
      </div>

      <div className="righthome">
        <img src={man} alt="Portfolio" />
      </div>
    </div>
  );
};

export default Home;
