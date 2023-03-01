import React from 'react'

import "../styles/About.css";
import profilepic from '../assets/img/profilepic.png';

function About() {
  return (
    <div className="about_page">
      <h1>About Me</h1>
      <img src={profilepic} alt="profilepic"/>

      <p className="aboutme">
      Hi, my Name is Jaya Singh. I am a full Stack Web Developer.
      </p>
     
      <div className="skills">
      <h1> My Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, BootStrap,JavaScript
            </span>
            </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB, Terraform
             
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, PowerShell, C++, Python 3</span>
          </li>
        </ol>
      </div>
      </div>
     
      
  )
}

export default About