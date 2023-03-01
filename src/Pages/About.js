import React from 'react'

import "../styles/About.css";
import profilepic from '../assets/img/profilepic.png';

function About() {
  return (
    <div className="about_page">
      <h1>About Me</h1>
      <img src={profilepic} alt="profilepic"/>

      <p className="aboutme">
      Hi, my Name is Jaya Singh.I am a Software Engineer. I work in Pager Duty. Before PageDuty I was an
                employee in Catalytic which later aquired by PagerDuty. I have Joined Northwestern boot camp coding
                classes to sharpen my knowledge and to learn many more things to become a best Web Developer.Please check my profile in Linkedin
                 <p><a href="https://www.linkedin.com/in/jaya-singh-9aa606133/" target="_blank"
                rel="noopener noreferrer">https://www.linkedin.com/in/jaya-singh-9aa606133/</a></p>
                </p>
     <div className="skills">
      <h2> My Skills</h2>
        <ol className="list">
          <li className="item">
            <h3> Front-End</h3>
            <span>
              ReactJS, HTML, CSS, BootStrap,JavaScript
            </span>
            </li>
          <li className="item">
            <h3>Back-End</h3>
            <span>
              NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB, Terraform
             
            </span>
          </li>
          <li className="item">
            <h3>Languages</h3>
            <span>JavaScript, PowerShell, C++, Python 3</span>
          </li>
        </ol>
      </div>
      </div>
     
      
  )
}

export default About