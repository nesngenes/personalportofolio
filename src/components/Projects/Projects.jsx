import React from 'react'
import './styles.css'
import { labuenaver2, aone, albatech, angie, bootcamp_interview_api, agnes_laundry } from '../../assets'



const Projects = () => {
  return (
    <div className='projects' id='projects'>
        <h1 className='projects-heading'>Projects</h1>


        <div className='projects-content'>

        <div className='project'>
            <div className='project-title'>
              <p>Backend, Golang, Gin Gonic</p>
              <h1>Bootcamp Candidate Interview API</h1>
              <div className='image-wrapper'>
              <img src={bootcamp_interview_api} />
              </div>
            </div>
            <div className='project-cotent'>
              <p className='project-description'>
              The bootcamp candidate interview application is a collaborative project designed to assist both HR professionals and interviewers in the candidate recruitment process. With the help of Gin Gonic, our application can be executed using both Postman and a Frontend interface. Additionally, I have also added advanced features, including email sending using Go Mail and seamless file uploads to Cloudinary. Furthermore, our application has undergone comprehensive unit testing and is now fully prepared for deployment.
              </p>
              <a href='https://github.com/nesngenes/Bootcamp-Candidate-Interview-Application' target='_blank' className='source-code'>Source Code</a>
            </div>
          </div>

          <div className='project'>
            <div className='project-title'>
              <p>Backend, Golang, Console App</p>
              <h1>Enigma Laundry Console App</h1>
              <div className='image-wrapper'>
              <img src={agnes_laundry} />
              </div>
            </div>
            <div className='project-cotent'>
              <div className='project-description'>
                <p>Enigma Laundry Console App is a Go-based application designed to simplify laundry business operations. It utilizes PostgreSQL as its backend database for efficient data storage.</p>
                <br/>
                <b>Features:</b>
                <br/>
                <p><b>Easy Navigation:</b> The system offers a straightforward terminal interface for user interaction, providing options to manage customer data, services, and transactions. <br/><br/>

                <b>Multi-Functionality:</b> Users can choose from various actions such as viewing, inserting, updating, and deleting data across different tables. <br/><br/>

                <b>Visual Data Representation:</b> The system presents data in a tabular format using the github.com/olekukonko/tablewriter package, enhancing data visualization.<br/><br/>

                <b>Swift Data Entry:</b> Efficiently input data through the terminal, reducing errors and enhancing user experience.<br/><br/>

                <b>Dynamic Updates:</b> Modify existing data by specifying the record's ID, ensuring accurate updates.<br/><br/>

                <b>Effortless Deletion:</b> Delete records using their respective IDs, facilitating precise data management.
                </p>
              </div>
              <a href='https://github.com/nesngenes/enigmalaundry-console-app' target='_blank' className='source-code'>Source Code</a>
            </div>
          </div>

        <div className='project'>
            <div className='project-title'>
              <p>Spa, UI/UX</p>
              <h1>Angie Spa</h1>
              <div className='image-wrapper'>
              <img src={angie} />
              </div>
            </div>
            <div className='project-cotent'>
              <p className='project-description'>
              Angie Spa is a side project for learning UI/UX as well as practicing frontend skills, particularly React JS and CSS.
              </p>
              <a href='https://angie-iota.vercel.app/' target='_blank' className='visit-button'>Visit Site</a>
              <a href='https://github.com/nesngenes/angie' target='_blank' className='source-code'>Source Code</a>
            </div>
          </div>
         
          <div className='project'>
            <div className='project-title'>
              <p>Cafe, Map API, UI/UX, MERN Stack</p>
              <h1>LaBuena Cafe</h1>
              <div className='image-wrapper'>
              <img src={labuenaver2} />
              </div>
            </div>
            <div className='project-cotent'>
              <p className='project-description'>
              LaBuena is a cafe website that I created using MongoDB, Express.js, React, Node.js (MERN Stack). Within this website, there are also APIs such as MapBox to view the cafe branch locations on a map and the Google OAuth API for users to log in with their Google accounts.
              </p>
              <a href='https://github.com/nesngenes/labuenacafeMERN' target='_blank' className='source-code'>Source Code</a>
            </div>
          </div>
          

          <div className='project'>
            <div className='project-title'>
              <p>Company site</p>
              <h1>Albatech</h1>
              <div className='image-wrapper'>
              <img src={albatech} />
              </div>
            </div>
            <div className='project-cotent'>
              <p className='project-description'>
              Transforming the Figma design provided by Albatech company into clean code using React JS. Also, displaying external APIs if the user logs in with the email eve.holt@reqres.in and the password can be entered freely.
              </p>
              <a href='https://github.com/nesngenes/FrontEndTest' target='_blank' className='source-code'>Source Code</a>
            </div>
          </div>


          <div className='project'>
            <div className='project-title'>
              <p>E-commerce, Online Shop, Sport, Payment API, MERN Stack</p>
              <h1>Aone</h1>
              <div className='image-wrapper'>
              <img src={aone}/>
              </div>
            </div>
            <div className='project-cotent'>
              <p className='project-description'>
              Aone is an e-commerce website or online shop that sells volleyball sports equipment. Aone is built using the MERN Stack and utilizes the Stripe API to enable users to make payments.
              </p>
              <a href='https://github.com/nesngenes/aone' target='_blank' className='source-code'>Source Code</a>
            </div>
          </div>
          
        </div>


    </div>
  )
}

export default Projects