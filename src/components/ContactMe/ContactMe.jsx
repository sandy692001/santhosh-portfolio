import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'
import { Link } from 'react-scroll'


const ContactMe = () => {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex:1}}>
                <ContactInfoCard
                iconUrl="./assets/images/mail.png"
                text={<a href="mailto:smanoharan692001@gmail.com" className='link'>smanoharan692001@gmail.com</a>}
                />
                <ContactInfoCard
                iconUrl="./assets/images/github.png"
                text={<a href="https://github.com/sandy692001" className='link'>https://github.com/sandy692001</a>}
                />
            </div>
            <div style={{flex:1}}>
                <ContactForm/>
            
            </div>
        </div>
    </section>
  )
}

export default ContactMe