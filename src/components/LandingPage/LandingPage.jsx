import React from 'react'
import './styles.css'
import {cv} from '../../assets'


const LandingPage = () => {
  return (
    <div className='landingPage'>
      <div className='heading-name'>

        <h1 className='water big-water'>Agnes Maria Anggelina</h1>
        <h1 className='water big-water'>Agnes Maria Anggelina</h1>
        
        <div className='medium-water'>
          <h1 className='water'>Agnes Maria Anggelina</h1>
          <h1 className='water'>Agnes Maria Anggelina</h1>
        </div>

        <div className='small-water'>
          <h1 className='water'>Agnes Maria</h1>
          <h1 className='water'>Agnes Maria</h1>
        </div>


        <div className='roleex'>
          <h2>Fullstack web developer</h2>
          <h2>MERN Stack developer</h2>
          <a href={cv} download className='cv-button'>Download CV</a>
        </div>
        
      </div>
    </div>
  )
}

export default LandingPage