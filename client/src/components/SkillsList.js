import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

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
      <div>
        <h1>Skill Set</h1>
        <div>
          {this.state.skills.map(skill => {
            return (
              <div key={skill.id}>
                <h4>{skill.title}</h4>
                <p>{skill.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default SkillsList;