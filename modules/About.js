import React from 'react'

export default React.createClass({

  render(){
    return  <main>
              <h2 className="subhead">About</h2>
              <img className="about--image" src="/assets/paul.png"/>
              <h3>Hi, my name is Paul.</h3>
              <p className="about--text">I&rsquo;m a front-end developer in <span className="group--text">San Antonio, TX</span> with an interest in ReactJS. With degrees in business/marketing and communication design informing my software development, I approach problems from multiple viewpoints to best scope the challenge and create a solution.</p>
              <a className="about--link" href="https://github.com/paullazo19">Check out my github profile.</a>

            </main>
  }
})
