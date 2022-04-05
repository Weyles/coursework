import React, { Component } from 'react'
import styles from './Todo.module.css'


export default class Todo extends Component {
  render() {
    return (
      <div className={styles.item}>
        <div className={styles.index}>
            {
              this.props.index
            }
            <input 
                className={styles.checkbox}
                type='checkbox' 
                defaultChecked={this.props.isDone} 
                onChange={() => this.props.handleDone(this.props.todo)} 
            />
            <span className={styles.text}>
              {
                  this.props.isDone ? <s>{this.props.todo.value}</s> : this.props.todo.value
              }
            </span>
        </div>
        <div >
            <button className={styles.delete} onClick={() => this.props.handleDelete(this.props.todo.id)}>Delete</button>
        </div>
      </div>
    )
  }
}
