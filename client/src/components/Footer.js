import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footerstyle = styled.div`

  width: 100%;
  margin-top: 75px;
  height: 100px;
  background-color: #333333;
  color: #fbd334;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .decor {
    text-decoration: underline;
  }
  h3 {
    size: 18px;
  }
`
const LinkStyle = styled.div`
  float: right;
  width: 10%;
  text-align: center;
  
  a {
    margin: 0px -25px;
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    text-decoration: none;
    color: #fbd334;
  }
  .decor {
    text-decoration: underline;
      margin-bottom: auto;
      margin-top: 9px;
  }

`

const Footer = () => {
  return (
    <Footerstyle>
      <div>
      <h3>Graduated from<br />General Assembly<br /> Class of Nov 2017</h3>
      </div>
      <div>      
        <h3 className="decor">Contact Me</h3>
        <p>E-mail: skyyoumans@gmail.com</p>
        </div>
      <LinkStyle>
        <div className='footerbg'>
        <h3 className="decor">Links</h3>
        <Link to="https://github.com/Skyoumans">Github</Link>
        <Link to="https://www.linkedin.com/in/skylaryoumans/">LinkedIn</Link>
        <Link to="https://profiles.generalassemb.ly/profiles/skylaryoumans">GA Profile</Link>
        </div>
      </LinkStyle>
    </Footerstyle>
  );
};

export default Footer;