import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render(){
    return(
      <section>
      <h2 className="subhead">Projects</h2>
       <ul>
         <li><Link to="/projects/webcoding/etsy">Etsy</Link>&ndash; This project is a replication of the search feature on Etsy&rsquo;s website. </li>
          <li><Link to="/projects/webcoding/todo">Todo</Link>&ndash; This project is a todo list web app. </li>
       </ul>
       {this.props.children}
      </section>
    )
  }
})
