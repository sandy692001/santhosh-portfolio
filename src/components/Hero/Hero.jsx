import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-container"> 
      <div className="hero-content">
        <h2>SANTHOSH MANOHARAN</h2>
        <p>
            Passionate Full Stack Developer | Transforming Ideas into Seamless and 
            Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
            <div className="tech-icon">
                <img src=" ./assets/images/sql.png" alt="" />
            </div>
            <img src="./assets/images/Mypic.jpeg" alt=" " className='mypic'/>
        </div>

        <div>
            <div className="tech-icon">
                <img src="./assets/images/mongo-db.png" />
            </div>
            <div className="tech-icon">
                <img src="./assets/images/javascript.png" />
            </div>
            <div className="tech-icon">
                <img src="./assets/images/react.png" />
            </div>
            <div className="tech-icon">
                <img src="./assets/images/nodejs.png" />
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;