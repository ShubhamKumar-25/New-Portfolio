import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-about">
          <h3>Shubham's Portfolio</h3>
          <p>Crafting clean code & creative projects 🚀</p>
        </div>

        {/* Middle Section - Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Socials */}
        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://github.com/ShubhamKumar-25/My-Profile" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/shubham-kumar-3916162ba/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://x.com/Shubham7250kr?t=zXyKC2dhOvP2bCPgd_6ukQ&s=08" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/the_rohangupta9167/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shubham | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
