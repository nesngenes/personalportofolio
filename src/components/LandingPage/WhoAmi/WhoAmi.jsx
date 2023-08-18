import React from 'react'
import HeaderSocials from '../HeaderSocials/HeaderSocials'

import './styles.css'

const WhoAmi = () => {
  return (
    <div className='who-am-i'>
        <h2 className='scrool-down'>Scrool Down</h2>

        <div className='brief-intro'>
          <h2>Who am i </h2>
          <p>👋 Hi, I'm Agnes Maria Anggelina! 🌟
            <br/> 
            🚀 Golang Enthusiast | Code Explorer
            <br/>
              🎓 Enigma Camp Graduate
            <br/>
              💻 Turning Bugs into Features | Building Digital Dreams
            <br/>
              🌌 Let's Collaborate and Code Together! 💬🔧
            </p>
        </div>

        <HeaderSocials />
    </div>
  )
}

export default WhoAmi