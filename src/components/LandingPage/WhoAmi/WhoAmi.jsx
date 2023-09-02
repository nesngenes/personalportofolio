import React from 'react'
import HeaderSocials from '../HeaderSocials/HeaderSocials'

import './styles.css'

const WhoAmi = () => {
  return (
    <div className='who-am-i'>
        <h2 className='scrool-down'>Scrool Down</h2>

        <div className='brief-intro'>
          <h2>Who am i </h2>
          <p>
          👋 Hey there, I'm Agnes Maria Anggelina! 🌼 
          <br/>
          🚀 Backend & Golang Enthusiast | Code Explorer
          <br/>
          🎓 Enigma Camp Graduate
          <br/>
          🎻 When I'm not coding, you'll find me playing the violin, vibing to the tunes of my favorite K-pop group SEVENTEEN 💎 and catching football matches ⚽.
          <br/> 
          🌌 Let's Collaborate and Code Together! 💬🔧  
          </p>
        </div>

        <HeaderSocials />
    </div>
  )
}

export default WhoAmi