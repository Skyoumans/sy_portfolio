import React, { Component } from 'react';
import { Link } from 'react-router-dom' 

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Skylar Youmans</h1>
        <p>Full-Stack Junior Web Developer</p>
        <p><img src="https://i.imgur.com/MXOp9uq.png" alt="Quote about Skylar as a developer" /></p>
        {/* //Image taken from https://profiles.generalassemb.ly/profiles/skylaryoumans// */}
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
      </div>
    );
  }
}

export default HomePage;