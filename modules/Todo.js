import React from 'react'
export default React.createClass({
  render(){
    return(
      <section>{this.props.params.Todo}
        <div>
          <h1>Todo Project</h1>
          <a href="http://paul_lazo_todo.surge.sh/">Try out my Todo app!</a>
        </div>
        <img className="image" src="/assets/todo.png"/>
      </section>

    )
  }
})
