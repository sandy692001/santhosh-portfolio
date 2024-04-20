import React from 'react'
import "./MobileNav.css"
import { Link } from 'react-scroll'
import { useHref } from 'react-router-dom'

const PDF_FILE_URL = "http://localhost:5173/My_Resume.pdf" 

const MobileNav = ({ isOpen, toggleMenu }) => {

  const downloadfileAtURL=(url) =>{
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a')
    aTag.href=url
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
}
  return (
    <>
    <div 
      className={`mobile-menu ${isOpen ? "active" : ""}`}
      onClick={toggleMenu}
    >

      <div className="mobile-menu-container">
      <img className="logo" src="./assets/images/logo.png" alt="" />

      <ul>
      <li>
                    <Link className="menu-item" activeClass='active' to='hero-content' spy={true} smooth={true}  offset={-100} duration={500} >Home</Link> 
                </li>
                <li>
                    <Link className="menu-item" activeClass='active' to='Education' spy={true} smooth={true}  offset={-100} duration={500} >Education</Link> 
                </li>
                <li>
                    <Link activeClass='active' to='skills' spy={true} smooth={true}  offset={-160} duration={500} className="menu-item">Skills</Link>
                </li>
                <li>
                    <Link activeClass='active' to='experience-container' spy={true} smooth={true}  offset={-100} duration={500} className="menu-item">Work Experience</Link>
                </li>
                <li>
                    <Link activeClass='active' to='portfolio' spy={true} smooth={true}  offset={-100} duration={500} className="menu-item">Projects</Link>
                </li>
                <li>
                    <Link activeClass='active' to='contact-container' spy={true} smooth={true}  offset={-100} duration={500} className="menu-item">Contact Me</Link>
                </li>

                <button className="contact-btn" onClick={() =>{downloadfileAtURL(PDF_FILE_URL)}}>
                  Hire Me
                </button>
      </ul>
      </div>

    </div>
    </>
  )
}

export default MobileNav; 