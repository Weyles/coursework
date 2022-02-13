import React, { Component } from 'react'

export default class AddTodo extends Component {
	state = {
		dafaultValue: '',
		value: this.props.addTodoValue,
	}

	handleChange = (e) => {
		//Updating local component state
		//Обновление состояния локального компонента
		this.setState({ value: "" });
	}

	clearInput = () => {
		//Clear existing value in input
		//Очистить существующее значение во входных данных
		document.getElementById("todoValue").value = "";
		//Updating local component state
		//Обновление состояния локального компонента
		this.setState({ value: "" });
	}

	addTodo = () => {
		//Call method reference in Todos component using props
		//Вызов ссылки на метод в компоненте Todos с использованием реквизита
		this.props.fooAddTodo(this.state.value);
		this.clearInput();
	}

	render() {
		return (
			<div className='input-group mb-3'>
				<input type="text" className="form-control" id="todoValue" placeholder="ToDo" onChange={this.handleChange} />
				<div className="input-group-append">
					<button onClick={this.addTodo} className="btn btn-outline-secondary" type="button" id="button-addon2">Add New ToDo</button>
				</div>
			</div>
		)
	}
}




/*todos.jsx
In Todos class there is state property for adding dynamic content in Component. state is a special property in 
React component it is basically an object to keep data which we will use in our class component. a state is a 
private object only accessible to the component itself.

In above Class Component Todos, we have added some methods which are defined as arrow notation as we are 
going to access these methods from other Components like Todo and AddTodo.

getTime() is getting used to adding an ID to ToDo, this is without arrow notation as we are using this 
method locally.

handleDone, handleDelete and addNewTodo are method whose references are getting passed as Component attributes, 
which will be called from their respective Components.
*/