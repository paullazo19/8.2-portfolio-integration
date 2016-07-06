import React from 'react'
import ReactDOM from 'react-dom'
import BlogData from '../data/BlogData'
import $ from 'jquery'

export default React.createClass({
  getDefaultProps(){
    return {
      blogs: BlogData
    }
  },
  getInitialState(){
    return {
      showAll: false
    }
  },
  handleToggleLength(e){
    this.entryId = e.target.previousSibling.dataset.id;

    this.setState({
      showAll: this.entryId
    })
    if (this.state.show === this.entryId) {
      setState({
        showAll: false
      })
    }
  },
  render(){
    console.log(this.state.showAll);
    return (
      <section>
        <h1 className="subhead">Blog</h1>
        {this.props.blogs.map(function(blog, i){
          return <div key={i} className="blog--entry">
          <h2 className="blog__heading">{blog.heading}</h2>
          <h5 className="blog__date">{blog.date}</h5>
          <h5 className="blog__TTR">{`${Math.ceil(((blog.paragraph1.split(" ").length)+(blog.paragraph2.split(" ").length))/230)} min read`}</h5>
          <div data-id={i} className={i == this.entryId ? "showContent" : "hideContent"}>
            <p data-id={i} className="blog__paragraph">{blog.paragraph1}</p>
            <p data-id={`i+1`} className="blog__paragraph">{blog.paragraph2}</p>
          </div>
          <button className="blog--showMore" onClick={this.handleToggleLength}>Read more</button>

        </div>
        }, this)}
      </section>
    )
  }
})
