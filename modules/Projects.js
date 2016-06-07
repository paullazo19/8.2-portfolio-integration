import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps(){
    return {
      projects: [
        {
          title: "Project 1",
          projectURL: "http://nfl.com"
        },
        {
          title: "Project 2",
          projectURL: "http://dallascowboys.com"
        },
        {
          title: "Project 3",
          projectURL: "http://nba.com"
        },
      ]
    }
  },
  render(){
    return(
      <section>
      <h2 className="subhead">Projects</h2>
       <ul>
       {this.props.projects.map(function(project, i){
         return <li key={i}>{project.title}</li>
       }, this)
     }
       </ul>
      </section>
    )
  }
})
