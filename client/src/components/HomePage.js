import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeStyle = styled.div`
  img {
    margin-bottom: 70px;
    margin-top: 35px;
    width: 85%;
    border-radius: 15px;

  }
  margin: auto;
  text-align: center;
  a {
    background-color: #2d4e6c;
    border: none;
    padding: 15px 32px;
    display: inline-block;
    margin-top: 60px;
    margin-left: 125px;
    margin-right: 125px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    border-radius: 5%;
    color: gold;
  }
  h1 {
    display: block;
    font-size: 7em;
    margin-top: auto;
    margin-bottom: px;
    -webkit-margin-before: 0.67em;
    -webkit-margin-after: 0.67em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
    font-family: 'Shadows Into Light', cursive;
    color: #2d4e6c;
    text-shadow: 2px 2px gold;
    text-decoration: wavy;
    text-transform: uppercase;
  }
  .centerp {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: -25px;
  p {
    width: 50%;
    margin: 60px;
    padding: 30px;
    border: 30px;
    font-family: 'Quicksand', sans-serif;
    color: gold;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    /* background-image: url('/images/triangular_@2X.png') */
    
  }
}
}
`


class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeStyle>
          <br />
                  <h1>Hello. My name is Skylar.</h1>
        <img src="https://i.imgur.com/MXOp9uq.png" alt="Quote about Skylar as a developer" />
        {/* //Image taken from https://profiles.generalassemb.ly/profiles/skylaryoumans// */}

        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <div className='centerp'>
          <p>I am a Full Stack Developer dedicated to helping you or your business succeed in creating 
          interactive and user-friendly websites designed for whatever purpose(s) you need. I'm fast, fun, and friendly, but I still 
          know when its time to get things done. <br /><br />I can't wait to hear from you!
          
          </p>
        </div>
      </HomeStyle>
    </div>
    );
  }
}

export default HomePage;