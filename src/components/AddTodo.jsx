import React, { Component } from 'react'

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
        <tr>
        <td>
            <input placeholder={this.props.placeholder} value={this.props.inputValue} onChange={this.handleChange} />
        </td>
        <td>
            <button onClick={() => this.props.addTodo()}>Add task</button>
        </td>
        </tr>
    )
    }
}
