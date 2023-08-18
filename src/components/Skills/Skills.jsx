import React from 'react'
import './styles.css'

const Skills = () => {
  return (
    <div className='skills-page' id='skills'>

      <div className='skills-intro'>
        <div className='heading-set'>Skill set</div>
      </div>

      <div className='skillset'>

        <div className='skill'>
          <h3 className='heading-skill'>Front-End</h3>

          <p>React JS</p>
          <p>JavaScript</p>
          <p>CSS</p>
          <p>Axios</p>
        </div>

        <div className='skill'>
          <h3 className='heading-skill'>Back-End</h3>
          <p>Golang</p>
          <p>Gin Gonic</p>
          <p>PostgreSQL</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>MongoDB</p>
          <p>Third-Party Login</p>
          <p>RESTful API</p>
          <p>Python</p>
        </div>

        <div className='skill'>
          <h3 className='heading-skill'>Others</h3>
          <p>Unit Testing</p>
          <p>English</p>
          <p>Linux Environment</p>
          <p>API</p>
          <p>Git</p>
          <p>Postman</p>
          <p>Debugging</p>
        </div>
      </div>
    </div>
  )
}

export default Skills