import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

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
      <div>
        <h1>My Projects</h1>
        <div>
          {this.state.projects.map(project => {
            return (
              <div key={project.id}>
                
                <h4><a href={project.link_at}><img src={project.img} /></a></h4>
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default ProjectsList;