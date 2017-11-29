import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const ProjectStyle = styled.div`
  margin: auto;
  text-align: -webkit-center;
  h1 {
    font-family: 'Shadows Into Light', cursive;
    text-align: center;
    color: #2d4e6c;
    text-decoration: underline;
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

class ProjectsList extends Component {

  state = {
    projects: []
  }
  
  async componentWillMount () {
    try {
      const res = await axios.get('/api/projects')
      this.setState({projects: res.data})
    } catch(error) {
      console.log(error)
    }
  }

  render() {
    return (
      <ProjectStyle>
        <h1>MY PROJECTS</h1>
        <div>
          {this.state.projects.map(project => {
            return (
              <div className='card' key={project.id}>
                <div className='container'>
                  <h4><a href={project.link_at}><img src={project.img} /></a></h4>
                  <h4>{project.title}</h4>
                  <p>{project.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
        <BtnStyle>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
        </BtnStyle>
      </ProjectStyle>      
    );
  }
}

export default ProjectsList;