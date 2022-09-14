import React, {useState} from 'react'
import './styles.css'
import {logo, mainmenu} from '../../assets'


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)

  return (
    <div className={isMobile ? 'navbar-mobile' : 'navbar'}>
      <div className='navbar-logo'>
        <img src={logo} width='50px' />
        <h4 className='navbar-heading'>Agnes Maria</h4>
      </div>
      

      <div className={isMobile ? 'navbar-content-mobile' : 'navbar-content'} >
        <a href='#projects'>Projects</a>
        <a href='#skills'>Skills</a>
        <a href='#contact'>Contact</a>
      </div>

      <img onClick={() => setIsMobile(!isMobile)} className='mainmenu' src={mainmenu} alt="" />

    </div>
  )
}

export default Navbar