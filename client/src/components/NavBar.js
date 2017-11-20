import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <div>
        <Link to="/">Skylar Youmans</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  );
};

export default NavBar;