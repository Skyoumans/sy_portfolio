import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import HomePage from './components/HomePage.js'
import AboutPage from './components/AboutPage.js'
import ProjectList from './components/ProjectsList.js'
import SkillsList from './components/SkillsList.js'

class App extends Component {
  render() {
    return (
        <div>
        <Router>
          <div>
          <NavBar />
          <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/projects' component={ProjectList} />
          <Route exact path='/skills' component={SkillsList} />
          </Switch>
          <Footer />
          </div>
        </Router>
        </div>
    );
  }
}

export default App;
