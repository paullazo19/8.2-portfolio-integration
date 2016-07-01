import React from 'react'
import NavLink from './NavLink'
import About from './About'

export default React.createClass({
  render(){
    return (
      <div className="wrapper">
        <h1 className="title">Paul Lazo&rsquo;s Portfolio</h1>
        <nav role="nav" className="index__nav">
          <NavLink className="index__nav--link" to="/" onlyActiveOnIndex={true}>Projects&nbsp;</NavLink>
          <NavLink className="index__nav--link" to="/about">About&nbsp;</NavLink>
          <NavLink className="index__nav--link" to="/blog">Blog</NavLink>
        </nav>
        {this.props.children || <Projects/>}
      </div>
    )
  }
})
