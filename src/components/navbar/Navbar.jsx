import React, { useState } from 'react'
import'./Navbar.css'
import MobileNav from './MobileNav/MobileNav';
import { Link } from 'react-scroll';

const PDF_FILE_URL = "http://localhost:5173/My_Resume.pdf"  


const Navbar = () => {

    const downloadfileAtURL=(url) =>{
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a')
        aTag.href=url
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }
  return (
    <>

    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
    <nav className="nav-wrapper">
        <div className="nav-content">
            <img className="logo" src="./assets/images/logo.png" alt="" />

            <ul>
                <li>
                    <Link className="menu-item" activeClass='active' to='hero-img' spy={true} smooth={true}  offset={-100} duration={500} >Home</Link> 
                </li>
                <li>
                    <Link className="menu-item" activeClass='active' to='Education' spy={true} smooth={true}  offset={-100} duration={500} >Education</Link> 
                </li>
                <li>
                    <Link activeClass='active' to='skills' spy={true} smooth={true}  offset={-185} duration={500} className="menu-item">Skills</Link>
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

            <button className="menu-btn" onClick={toggleMenu}>
                <span 
                className={"material-symbols-outlined"}
                style={{ fontSize: "1.8rem" }}
                >
                   {openMenu ? "X" : "☰"}
                </span>
            </button>
        </div>
    </nav>
    </>
  )
}

export default Navbar