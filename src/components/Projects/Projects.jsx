import React from 'react'
import './styles.css'
import { labuenaver2, aone, albatech } from '../../assets'



const Projects = () => {
  return (
    <div className='projects' id='projects'>
        <h1 className='projects-heading'>Projects</h1>


        <div className='projects-content'>
         
          <div className='project'>
            <div className='project-title'>
              <p>Cafe, Map API</p>
              <h1>LaBuena Cafe</h1>
              <div className='image-wrapper'>
              <img src={labuenaver2} />
              </div>
            </div>
            <div className='project-cotent'>
              <p className='project-description'>
              LaBuena merupakan website cafe yang saya buat menggunakan MongoDB, Express.js, React, Node.js (MERN Stack). Di dalam website ini juga terdapat API seperti MapBox untuk dapat melihat lokasi cabang cafe pada sebuah Map dan API google oauth agar user dapat login dengan akun google mereka.
              </p>
              <a href='https://labuenacafe.up.railway.app/labuenacafe' target='_blank' className='visit-button'>Visit Site</a>
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
              Menerjakan soal Technical Test dari perusahaan Albatech yaitu dengan mengubah desain Figma yang telah diberikkan perusahaan menjadi clean code dengan React JS. Serta menampilkan external API jika user login dengan email eve.holt@reqres.in dan password dapat diisi bebas.
              </p>
              <a href='https://frontendtest-production.up.railway.app/albatech' target='_blank' className='visit-button'>Visit Site</a>
              <a href='https://github.com/nesngenes/FrontEndTest' target='_blank' className='source-code'>Source Code</a>
            </div>
          </div>


          <div className='project'>
            <div className='project-title'>
              <p>E-commerce, Online Shop, Sport</p>
              <h1>Aone</h1>
              <div className='image-wrapper'>
              <img src={aone}/>
              </div>
            </div>
            <div className='project-cotent'>
              <p className='project-description'>
              Aone merupakan website e-commer atau online shop yang menjual perlengkapan olahraga voli. Aone dibuat menggunakan MERN Stack dan menggunakan API Stripe agar user dapat melakukan pembayaran.
              </p>
              <a href='https://aone2-production.up.railway.app/aone' target='_blank' className='visit-button'>Visit Site</a>
              <a href='https://github.com/nesngenes/aone' target='_blank' className='source-code'>Source Code</a>
            </div>
          </div>
          
        </div>


    </div>
  )
}

export default Projects