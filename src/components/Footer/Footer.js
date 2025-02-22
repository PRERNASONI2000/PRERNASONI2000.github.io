import React from 'react';
import './footer.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const  Footer = () => {
  return (
    <footer className='center'>
     <div className='container'>
      <div className='row'>
        <div className='col-md-12 col-12'>
        <h4>PRERNA SONI</h4>
        <p> Frontend Developer | React.js Specialist | UI/UX Designer</p>
        <p><FaEnvelope /> - <a href="mailto:prernasoni2000@gmail.com">prernasoni2000@gmail.com</a> | <FaPhoneAlt /> - +91-9461847036</p>
        <div className='social'>
          <a href='https://www.linkedin.com/in/prerna-soni-472a9323a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' aria-label='github' className='faLinkedin'>
                       <FaLinkedin /></a>
                       <a href='https://Github.com' aria-label='linkdin' className='faGithub'>
                       <FaGithub /></a>
        </div>
        <p className='copyright'>© 2025 PRERNA SONI. All rights reserved.</p>
        </div>
      </div>
     </div>
    </footer>
  )
}

export default Footer;