import React from 'react'

export default React.createClass({

  render(){
    return  <main>
              <h2 className="subhead">About</h2>
              <div className="about__image--container"><img className="about--image" src="/assets/paul.png"/></div>
              <h3 className="about--firstline">Hi, my name is Paul.</h3>
              <p className="about--text">I&rsquo;m a software developer in San Antonio, TX with a specialization in ReactJS. With degrees in business/marketing and communication design informing my coding, I approach problems from multiple viewpoints to best scope the challenge and create a solution.</p>
              <a className="about--link" href="https://github.com/paullazo19">Check out my github profile.</a>
              <p className="about--email">Send a message to me at <a className="about--link" href="mailto:paullazo19@gmail.com">paullazo19@gmail.com</a></p>
            </main>
  }
})
