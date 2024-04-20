import React, { useRef } from 'react'
import './ContactForm.css'
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9r8ek9n', 'template_5otsncq', form.current, {
        publicKey: 'TzmKpasOeaV-Icp0d',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };




  return (
    <div className="contact-form-content">
        <form ref={form} onSubmit={sendEmail}>
            <div className="name-container">
                <input type="text" name="firstname" placeholder='First Name' />
                <input type="text" name="lastname" placeholder='Last Name' />
            </div>
            <input type="text" name="email" placeholder='Email' />
            <textarea type="text" name="message" placeholder='Message' rows={3} />

            <button>Send</button>
        </form>
    </div>
  )
}

export default ContactForm