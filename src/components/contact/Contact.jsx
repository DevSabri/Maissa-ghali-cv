import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'

import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o44j92u', 'template_npkvbsp', form.current, 'oiTdCQjpNBwpr_cu6')
    
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Restons En</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>maissa.el-ghali@ipsa.fr</h5>
            <a href="mailto:maissa.el-ghali@ipsa.fr">Envoyer un message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <a href="https://m.me/maissa.ghali.3348" target='_blank'>Envoyer un message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <a href="https://wa.me/330783884310" target='_blank'>Envoyer un message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Votre nom complet' required/>
          <input type="email" name='email' placeholder='Votre Email' required/>
          <textarea name="message" rows="7" placeholder='Votre Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer un message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact