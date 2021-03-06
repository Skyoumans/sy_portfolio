import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AboutPageStyle = styled.div`
  font-family: 'Quicksand', sans-serif;
  color: gold;
  background-color: rgba(0, 0, 0, 0.6);
  margin-top: 70px;
  padding: 12px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s; 
  img {
    float: left;
    height: 350px;
    margin: 20px;
    padding-bottom: 60px;
    padding-top: 65px;
  }
  h1 {
    margin-bottom: 0px;
    text-decoration: underline;
  }
`
const BtnStyle = styled.div`
  text-align: center;
  a {
    background-color: #2d4e6c;
    border: none;
    padding: 15px 32px;
    display: inline-block;
    margin-top: 60px;
    margin-left: 125px;
    margin-right: 125px;
    margin-bottom: 125px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    border-radius: 5%;
    color: gold;
  }
`

const AboutPage = () => {
  return (
    <div>
    <AboutPageStyle>
      <img src="https://i.imgur.com/aNt2kxdl.jpg" alt="Skylars profile" />
      <div>
        <h1>Personal Background</h1>
        <p>
          I was born in Catersville, Ga in 1993. My childhood, though was spent all over the country. 
          Finally, my family settled in Asheville, NC. Upon graduating from high school, I moved back to Georgia 
          and lived with my birthmother in Macon, Ga. I spent several years relecting on myself, my future, and what my purpose was in life.
          I learned that my reason for being here was to influence the people's lives around me in a positive way. My desire in life is to ensure their success,
          whether that be in their personal or professional life.<br /><br />
          I met my partner while at the Pride festival in Atlanta and he was the one who pushed me to learn how to become a web developer. 
          I was intrigued by the subject, so I gathered some materials from the Internet on how to teach myself, ranging from books to instructional
          videos. After six to eight months of teaching myself, I realized I was much further behind that I wanted to be. This is what lead me to seek
          professional instruction, and upon researching, I discovered General Assembly.
          </p>
        <h1>My purpose as a Web Developer</h1>
        <p>
        As soon as I started learning how to code, I was instantly drawn in. During my free time, I enjoy games and puzzles that involve some level of problem solving. 
        I realized writing code worked in much the same way. All it was to me was this huge puzzle where you have to get all the pieces to fit
        correctly. The only difference was that I was working with words and components rather than wooden pieces or a video game.<br /><br />
        This sets me apart from other Developers simply because I am so passionate about being a Developer. When employed or contracted by a company, I will always
        throw myself into the project with vigor and dedication to finishing the "puzzle". I learned from my experiences that I should always strive to work
        smart, not hard. I follow this mantra through all aspects of my life. When talking about code, this means I always try and find the best practices and the absolute shortest way
        to write out any code I am working on, because more code equals longer waiting time and that takes away from a User experience. Which will not do.
        </p>
      </div>
    </AboutPageStyle>
    <BtnStyle>
      <Link to="/">Home</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
    </BtnStyle>
    </div>
  );
};

export default AboutPage;