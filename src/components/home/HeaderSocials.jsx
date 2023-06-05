import React from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaDev,
  FaInstagram,
} from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/Vaibhav-VM-Vidhya"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://hashnode.com/@MohanalkarVaibhav"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <SiHashnode />
      </a>

      {/* <a href='https://dev.to/gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a> */}

      <a
        href="https://www.linkedin.com/in/vaibhav-mohanalkar-169582233/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>

      {/* <a href='https://wwww.facebook.com/Greg.Sithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a> */}

      <a
        href="https://www.instagram.com/mohanlkarvaibhav/"
        className="home__social-link"
        target="__blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
