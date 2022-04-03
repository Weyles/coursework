import React, { Component } from 'react'
import { Fragment } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <Fragment>
        <td>
            {
                this.props.index
            }
            <input 
                type='checkbox' 
                defaultChecked={this.props.isDone} 
                onChange={() => this.props.handleDone(this.props.todo)} 
            />
        </td>
        <td>
            {
                this.props.isDone ? <s>{this.props.todo.value}</s> : this.props.todo.value
            }
        </td>
        <td>
            <button onClick={() => this.props.handleDelete(this.props.todo.id)}>Delete</button>
        </td>
      </Fragment>
    )
  }
}
