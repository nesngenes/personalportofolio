import React, { useRef } from 'react';

import './styles.css'

import { MdOutlineMailOutline } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from 'emailjs-com'

const GetInTouch = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_iqk1i58', 'template_4d69d33', form.current, 'ynWRzCNx7d5HGk5C4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

  return (
    <div className='get-in-touch-page'>
        
        <div className='get-in-touch-heading'>
            <h5>Get In Touch</h5>
            <h2 className='contact-me'>Contact Me</h2>
        </div>

        <div className='get-in-touch-content' id='contact'>
                <div>
                    <article className='artikel'>
                        <MdOutlineMailOutline />
                        <h4>Email</h4>
                        <h5>agnesmariaanggelina@gmail.com</h5>
                        <a href='mailto:agnesmariaanggelina@gmail.com'>Send a message</a>
                    </article>

                    <article className='artikel'>
                        <BsWhatsapp />
                        <h4>WhatsApp</h4>
                        <h5>0813-2682-2309</h5>
                        <a href='https://wa.me/6281326822309'>Send a message</a>
                    </article>
                </div>
                

                <form ref={form} onSubmit={sendEmail} action='' className='text-form'>
                    <input type='text' name='name' placeholder='Your Full Name' required />

                    <input type='email' name='email' placeholder='Your Email' required />

                    <textarea name='message' id='' rows='7' placeholder='Your Message'></textarea>

                    <button className='form-button' type='submit'>Send Message</button>
                </form>

        </div>
    </div>
  )
}

export default GetInTouch