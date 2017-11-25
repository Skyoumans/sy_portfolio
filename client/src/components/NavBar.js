import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBG = styled.div`
    background-color: #333333;
    overflow: hidden;
`

const NavStyle = styled.div`
  width: 100%;
  a, h1 {
    float: left;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #fbd334;
    align-items: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-weight: bold;
    text-transform: uppercase;
  }
  a:hover {
    background-color: #4c3c3c;
    color: black;
  }
`
const GroupedLinks = styled.div`
  float: right;
    a {
      color: gold;          
    }
`

const NavBar = () => {
  return (
    <NavBG>
      <NavStyle>
            <Link to="/">Skylar Youmans</Link>
            <GroupedLinks>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            </GroupedLinks>
      </NavStyle>
  </NavBG>
  );
};

export default NavBar;