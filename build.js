import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import Blog from './modules/Blog'
import Projects from './modules/Projects'
import Project from './modules/Project'
import Etsy from './modules/Etsy'
import Todo from './modules/Todo'
import About from './modules/About'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Projects}/>
      <Route path="/projects" component={Projects}>
        <Route path="/projects/project" component={Project}/>
      </Route>
      <Route path="/about" component={About}/>
      <Route path="/blog" component={Blog}/>
    </Route>
  </Router>
), document.getElementById('app'))
