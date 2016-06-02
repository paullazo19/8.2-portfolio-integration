import React from 'react'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render(){
    return (
      <section>
        <h1>Paul's Portfolio</h1>
        <nav role="nav">
          <NavLink to="/" onlyActiveOnIndex={true}>Home&nbsp;</NavLink>
          <NavLink to="/blog">Blog&nbsp;</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
        {this.props.children || <Home/>}
      </section>
    )
  }
})
