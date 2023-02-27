import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { IoLogoLinkedin } from "react-icons/io";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          < AiFillGithub />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SlSocialTwitter />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          < FaInstagram />
        </a>
      </p>
    </footer>
  );
}

export default Footer;