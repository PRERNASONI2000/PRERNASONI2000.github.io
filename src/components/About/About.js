import React from 'react';
import './about.css';
import resume from './Asset/MyResume25.pdf';
import { FaLinkedin, FaGithub  } from 'react-icons/fa'; //https://react-icons.github.io/react-icons/icons/fa/
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
  // const { name, role, description, resume, social } = about
  return (
    <div className='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 col-12 text-center'>
            <h1>Hi, I am  <span className='about_name'>Prerna Soni.</span></h1>
            <h3>A Front End Designer.</h3>
            <p className='about_des'>I’m a passionate web designer and frontend developer skilled in React, HTML, CSS, JavaScript, and UI design. Dedicated to delivering quality work on time, I approach every project with a positive attitude and a focus on excellence. While I’m joyful and friendly, I take my work seriously, ensuring seamless and user-friendly results.</p>
            <hr />
            <div className='about_contact'>
              <a  href={resume} rel='noopener noreferrer' target='_blank' className='btn-outline'>
                <span>Resume</span>
              </a>
              <a href='https://www.linkedin.com/in/prerna-soni-472a9323a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' aria-label='github' target='_blank' className='faLinkedin'>
              <FaLinkedin /></a>
              <a href='https://github.com/PRERNASONI2000' target='_blank' aria-label='linkdin' className='faGithub'>
              <FaGithub /></a>
              {/* <a href='https://facebook.com' aria-label='facebook' className='faFacebook'>
              <FaFacebook /></a> */}
            </div>
          </div>
        </div>
      </div>
     </div>
  )
}

export default About;