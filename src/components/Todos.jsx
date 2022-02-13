import React, { Component } from 'react';

import Todo from './Todo.jsx';
import AddTodo from './AddTodo.jsx';

export default class Todos extends Component {

	//Component state with default values
	//Компонент state с дефолтными значениями

	state = {
		addTodoValue: '',
		todos: [
			{
				id: 1,
				value: 'todo 1',
				isDone: false,
			},
			{
				id: 2,
				value: 'todo 2',
				isDone: true,
			},
			{
				id: 3,
				value: 'todo 3',
				isDone: false,
			},
		]
	}

	//Local helper method to get date
	//Локальный вспомагательный метод для получения даты времени
	/*getTime() is getting used to adding an ID to ToDo, this is without arrow notation as we are using this method locally.
	Не используют стрелочное обозначение (я так понимаю стрелочные функции) потому что будут использовать этот метод локально (внутри класса)*/

	getTime() {
		let localDate = new Date();
		var newTime = localDate.getTime();
		return newTime;
	}

	//method called from Todo component
	//Метод вызов которого идет с Todo компонента

	handleDelete = todo => {
		const todos = this.state.todos.filter((tSomething) => {
			return tSomething.id !== todo
		});
		this.setState({ todos });
	}

	handleDone = todo => {
		const todos = [...this.state.todos];
		todos.map((tSomething) => {
			if (tSomething.id === todo.id) {
				tSomething.isDone = !tSomething.isDone;
			}
			return tSomething;
		});
		this.setState({ todos });
	}

	//method called from AddTodo component
	//Метод вызывается из AddTodo компонента
	addNewTodo = value => {
		if (value) {
			const todos = [...this.state.todos];
			todos.push(
				{
					id: this.getTime(),
					value: value,
					isDone: false,
				}
			);
			this.setState({ addTodoValue: '', todos })
		} else {
			console.log('Please Add Todo Text');
		}
	}

	render() {
		return (
			<table className='table'>
				<tbody>
					{this.state.todos.map((todo, index) => (
						<tr key={todo.id}>
							<Todo index={index + 1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
						</tr>
					))}
					<tr>
						<td colSpan='4' className='text-center'>
							<AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue} />
						</td>
					</tr>
				</tbody>
			</table>
		)
	}
}
