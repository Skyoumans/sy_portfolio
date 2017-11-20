import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div>
      <h3>Graduated WDI 12 @ General Assembly <br /> Class of November 2017</h3>
    </div>
    <div>
      <h3>Contact Me</h3>
      <p>E-mail: skyyoumans@gmail.com</p>
    </div>
    <div>
      <h3>Links</h3>
      <Link to="https://github.com/Skyoumans">Github</Link>
      <Link to="https://www.linkedin.com/in/skylaryoumans/">LinkedIn</Link>
      <Link to="https://profiles.generalassemb.ly/profiles/skylaryoumans">GA Profile</Link>
    </div>
    </div>
  );
};

export default Footer;