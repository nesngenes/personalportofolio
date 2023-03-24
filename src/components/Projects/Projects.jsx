import React from 'react'
import './styles.css'
import { labuenaver2, aone, albatech, angie, dreamer } from '../../assets'



const Projects = () => {
  return (
    <div className='projects' id='projects'>
        <h1 className='projects-heading'>Projects</h1>


        <div className='projects-content'>

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
              Angie Spa merupakan side project untuk belajar UI/UX sekaligus untuk latihan skill frontend terutama React JS dan CSS.
              </p>
              <a href='https://angie-iota.vercel.app/' target='_blank' className='visit-button'>Visit Site</a>
              <a href='https://github.com/nesngenes/angie' target='_blank' className='source-code'>Source Code</a>
              <a href='https://www.figma.com/file/ASB9hzAE5dGtroEHds9Caq/ANGIE-SALON-AND-SPA?node-id=160%3A18&t=Y5TAtzuGhaG4uaB5-1' target='_blank' className='source-code'>View Figma</a>
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
              LaBuena merupakan website cafe yang saya buat menggunakan MongoDB, Express.js, React, Node.js (MERN Stack). Di dalam website ini juga terdapat API seperti MapBox untuk dapat melihat lokasi cabang cafe pada sebuah Map dan API google oauth agar user dapat login dengan akun google mereka.
              </p>
              <a href='https://labuenacafe.up.railway.app/labuenacafe' target='_blank' className='visit-button'>Visit Site</a>
              <a href='https://github.com/nesngenes/labuenacafeMERN' target='_blank' className='source-code'>Source Code</a>
              <a href='https://www.figma.com/file/JuX7PJrzaAnnCziLIBhpp2/LaBuena-Cafe?node-id=0%3A1&t=rHIgVDriwtFLCfag-1' target='_blank' className='source-code'>View Figma</a>
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
              Mengubah desain Figma yang telah diberikkan perusahaan Albatech menjadi clean code dengan React JS. Serta menampilkan external API jika user login dengan email eve.holt@reqres.in dan password dapat diisi bebas.
              </p>
              <a href='https://frontendtest-production.up.railway.app/albatech' target='_blank' className='visit-button'>Visit Site</a>
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
              Aone merupakan website e-commerce atau online shop yang menjual perlengkapan olahraga voli. Aone dibuat menggunakan MERN Stack dan menggunakan API Stripe agar user dapat melakukan pembayaran.
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