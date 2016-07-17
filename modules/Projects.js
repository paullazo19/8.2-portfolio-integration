import React from 'react'
import { Link } from 'react-router'
import ProjectData from '../data/ProjectData'

export default React.createClass({
  getDefaultProps(){
    return {
      projects: ProjectData
    }
  },
  render(){
    return(
      <section>
      <h2 className="subhead">Projects</h2>
       <ul>
         <p className="projects--text">For more work, check out my <a className="project--link github" href="https://github.com/paullazo19">github profile.</a></p>
       {this.props.projects.map(function(project, i){
         return <a className="grid__col--12 project--link" href={`http://${project.projectURL}`} key={i}>{project.title}<li className="project__image--container"><span className="project--info">{project.info}</span><img className="project--image" src={`/assets/${project.image}`}/></li></a>
       }, this)
     }
       </ul>
      </section>
    )
  }
})
