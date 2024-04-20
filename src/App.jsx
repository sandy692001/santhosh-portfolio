import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import './App.css'
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
import Project from "./components/Project/Project";

 const App = () => {
  return(
    <>
    <Navbar/>
    
    <div className="container">

    <Hero/>
    <Education/>
    <Skills/>
    <WorkExperience/>
    <Project/>
    <ContactMe/>
    <Footer/>
    </div>
    </>

  )
}



export default App

