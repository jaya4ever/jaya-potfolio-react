import React from "react";
import { IoLogoLinkedin } from "react-icons/io";

function Resume() {
  const downLoad = () => {
    fetch("JayaResume.pdf")
      .then((response) => {
        return response.blob();
      }).then((blob) => {
        let fileUrl = window.URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.href = fileUrl;
        link.download = "Resume.pdf";
        link.click();
      })
  }
  return (
    <section class="container">
      <h2 className="top-title">Download Jaya Singh Resume</h2>
      <button class="teal" onClick={downLoad}>Download Resume</button>
      <hr></hr>
      <div>

      </div>
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
            <span>JavaScript, PowerShell, C#, Python 3</span>
          </li>
        </ol>
        <p className="myself">Please check my linkedin</p>
        <a className="linkedin"
          href="https://www.linkedin.com/in/jaya-singh-9aa606133/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin />
        </a>
      </div>



    </section>
  );
}
export default Resume;







