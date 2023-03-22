import React from 'react'

import "../styles/About.css";
import profilepic from '../assets/img/profilepic.png';

function About() {
  return (
    <div className="about_page">
      <h1>About Me</h1>
      <img src={profilepic} alt="profilepic" />

      <p className="aboutme">
        Hi, my Name is Jaya Singh. I am a Software Engineer at Pager Duty.Before PageDuty I was an
        employee in Catalytic which later aquired by PagerDuty.Please check my profile in Linkedin
        <p><a href="https://www.linkedin.com/in/jaya-singh-9aa606133/" target="_blank"
          rel="noopener noreferrer">https://www.linkedin.com/in/jaya-singh-9aa606133/</a></p>
      </p>
      
    </div>


  )
}

export default About