import React, { Component } from 'react'
import styles from './Todo.module.css'

export default class AddTodo extends Component {
    handleChange = (e) => {
        this.props.handleInput(e.target.value);
    }

    clearInputs = () => {
        this.props.clearInput();
        this.setState({defaultValue: ""})
    }
    
    render() {
    return (
        <div className={styles.item}>
        <div>
            <input className={styles.input} placeholder={this.props.placeholder} value={this.props.inputValue} onChange={this.handleChange} />
        </div>
        <div>
            <button className={styles.addButton} onClick={() => this.props.addTodo()}>Add task</button>
        </div>
        </div>
    )
    }
}
