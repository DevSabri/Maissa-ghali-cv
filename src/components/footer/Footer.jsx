import React from 'react'
import './footer.css'

import {BsLinkedin} from 'react-icons/bs'
import {BsMessenger} from 'react-icons/bs'
import {AiFillMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MAISSA EL GHALI</a>

      <ul className='permalinks'>
        <li><a href="#">Page pricipale</a></li>
        <li><a href="#about">&Aacute; Propos</a></li>
        <li><a href="#cv">Mon CV</a></li>
        <li><a href="#divers">Informations diverses</a></li>
        <li><a href="#contact">Me contacter</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/maissa-el-ghali" target='_blank'><BsLinkedin /></a>
        <a href="https://m.me/maissa.ghali.3348" target='_blank'><BsMessenger /></a>
        <a href="mailto:maissa.el-ghali@ipsa.fr" target='_blank'><AiFillMail /></a>
      </div>

      <div className="footer__copyright">
        <small>Developed By DevSab Freelancer</small>
      </div>
    </footer>
  )
}

export default Footer