import React from 'react'
import './Project.css'
const Project = () => {
  return (
    <section id='portfolio'>
        <h2 className='space'>Projects</h2>

        <div className='container portfolio_container'>
            <article className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src="./assets/images/1.png" alt="" />
                </div>
                <h3>Rock Paper Scissor</h3>
                <div className="portfolio_item-cta">
             <button className='github-btn'><a href="https://bit.ly/3V83gwr" className='btn btn-primary' target='_blank'>Live Demo</a></button>
                </div>
            </article>

            <article className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src="./assets/images/3.png" alt="" />
                </div>
                <h3>Bespokebox</h3>
                <div className="portfolio_item-cta">
             <button className='github-btn'><a href="" className='btn btn-primary' target='_blank'>Live Demo</a></button>
                </div>
            </article>

            <article className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src="./assets/images/2.png" alt="" />
                </div>
                <h3>Stock Details</h3>
                <div className="portfolio_item-cta">
             <button className='github-btn'><a href="" className='btn btn-primary' target='_blank'>Live Demo</a></button>
                </div>
            </article>

            <article className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src="./assets/images/4.png" alt="" />
                </div>
                <h3>Budget App</h3>
                <div className="portfolio_item-cta">
             <button className='github-btn'><a href="" className='btn btn-primary' target='_blank'>Live Demo</a></button>
                </div>
            </article>

            <article className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src="./assets/images/5.png"  alt="" />
                </div>
                <h3>Personal Blog</h3>
                <div className="portfolio_item-cta">
             <button className='github-btn'><a href="hewellnessscript.blogspot.com" className='btn btn-primary' target='_blank'>Live Demo</a></button>
                </div>
            </article>

            <article className='portfolio_item'>
                <div className="portfolio_item-image">
                    <img src="./assets/images/6.png" alt="" />
                </div>
                <h3>Portfolio Website</h3>
                <div className="portfolio_item-cta">
             <button className='github-btn'><a href="" className='btn btn-primary' target='_blank'>Live Demo</a></button>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Project