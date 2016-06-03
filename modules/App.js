import React from 'react'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render(){
    return (
      <div className="wrapper">
        <h1 className="title">Paul Lazo&rsquo;s Portfolio</h1>
        <nav role="nav" className="index__nav">
          <NavLink className="index__nav--link" to="/" onlyActiveOnIndex={true}>Home&nbsp;</NavLink>
          <NavLink className="index__nav--link" to="/blog">Blog&nbsp;</NavLink>
          <NavLink className="index__nav--link" to="/projects">Projects</NavLink>
        </nav>
        {this.props.children || <Home/>}
      </div>
    )
  }
})
