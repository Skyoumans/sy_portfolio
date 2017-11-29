import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SkillStyle = styled.div`
  margin: auto;
  text-align: -webkit-center;
  h1 {
    font-family: 'Shadows Into Light', cursive;
    text-align: center;
    color: #2d4e6c;
    text-decoration: underline
  }
  .card {
    width: 50%;
    margin: 60px;
    padding: 30px;
    border: 30px;
    font-family: 'Quicksand', sans-serif;
    color: gold;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  .container {
    font-family: 'Quicksand', sans-serif;
    color: gold;
    padding: 2px 16px;
    margin: 5px 16px;
    text-align: center;
    h4 {
      text-align: center;
      font-size: 26px;
    }
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


class SkillsList extends Component {

  state = {
    skills: []
  }

  async componentWillMount () {
    try {
      const res = await axios.get('/api/skills')
      this.setState({skills: res.data})
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    return (
      <SkillStyle>
        <div>
        <h1>SKILL SET</h1>
        </div>
        <div>
          {this.state.skills.map(skill => {
            return (
              <div className='card' key={skill.id}>
                <div className='container'>
                  <h4>{skill.title}</h4>
                  <p>{skill.desc}</p>
                </div>
                
              </div>
            )
          })}
        </div>
        <BtnStyle>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </BtnStyle>
      </SkillStyle>
    );
  }
}

export default SkillsList;