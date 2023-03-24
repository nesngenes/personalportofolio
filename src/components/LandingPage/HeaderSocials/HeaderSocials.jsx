import React from 'react'
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

import './styles.css'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/agnes-maria-anggelina-aaa92b221/' target="_blank"><BsLinkedin /></a>
        <a href='https://github.com/nesngenes' target="_blank"><BsGithub /></a>
        <a href='https://wa.me/6281213717460' target="_blank"><BsWhatsapp /></a>
    </div>
  )
}

export default HeaderSocials