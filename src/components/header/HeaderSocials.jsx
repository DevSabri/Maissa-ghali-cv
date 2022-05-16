import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsMessenger} from 'react-icons/bs'
import {MdAlternateEmail} from 'react-icons/md'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/maissa-el-ghali" target='_blank'><BsLinkedin /></a>
        <a href="https://m.me/maissa.ghali.3348" target='_blank'><BsMessenger /></a>
        <a href="mailto:maissa.el-ghali@ipsa.fr" target='_blank'><MdAlternateEmail /></a>
        <a href="#" target='_blank'></a>
    </div>
  )
}

export default headerSocials