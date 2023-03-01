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
      <h2 className="top-title">Download My Resume</h2>
      <button class="teal" onClick={downLoad}>Download Resume</button>
      <hr></hr>
      <div>
        <div class="mt-5">
          <h2 className="top-title">Jaya Singh</h2>

          <li className="name_me">
            Full Stack Web Developer
          </li>
          <a className="linkedin"
         href="https://www.linkedin.com/in/jaya-singh-9aa606133/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin />
        </a>
      </div>
      </div>
      <div class="justify-content-center mt-5">
        <div>
          <h2 className="experience">Experience</h2>
          <ul>
            <li className="language">
              HTML, CSS, JavaScript, jQuery, React.js, IndexedDB,
              Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Resume;







