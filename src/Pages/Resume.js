import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>
      <div>
        <div class="mt-5">
          <h2 className="top-title">Jaya Singh</h2>
          <ul>
            <li>
             Full Stack Web Developer
            </li>
          </ul>
          <p class="mt-5">
          <a
          href="https://www.linkedin.com/in/jaya-singh-9aa606133/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin />
          </a>
          </p>
        </div>
      </div>
      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Experience</h2>
          <ul>
            <li>
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







