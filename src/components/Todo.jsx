import React, { Component } from 'react'

export default class Todo extends Component {
	render() {
		return (
			<React.Fragment>
				<td style={{ width: 10 }} className='text-center'>
					{this.props.index}
				</td>
				<td style={{ width: 15 }} className='text-center'>
					<input type='checkbox' defaultChecked={this.props.todo.isDone} onChange={/*Эта функция заменяет bind(this)*/ () => this.props.fooDoneDone(this.props.todo)} />
				</td>
				<td>
					{
						this.renderTodo()
					}
				</td>
				<td style={{ width: 100 }} className='text-center'>
					<button onClick={() => this.props.fooDelete(this.props.todo.id)} className="btn btn-danger btn-sm">Delete</button>
				</td>
			</React.Fragment>
		)
	}

	renderTodo() {
		if (this.props.todo.isDone) {
			return (
				<s>{this.props.todo.value}</s>
			);
		} else {
			return (this.props.todo.value);
		}
	}
}

/*Todo Class will represent a single Todo in the list and having methods fooDoneDone
( check/ uncheck event handler ) and fooDelete
( delete button event handler )
Класс Todo будет представлять одну задачу в списке и иметь методы fooDoneDone
(обработчик событий проверки/снятия отметки) и fooDelete
(обработчик событий кнопки удаления).*/

// import React, { Component } from 'react';

// class Todo extends Component {

//     render() {
//         return (
//             <React.Fragment >
//                 <td style={{ width: 10 }} className="text-center">
//                     {this.props.index}
//                 </td>
//                 <td style={{ width: 15 }} className="text-center">
//                     <input type="checkbox" defaultChecked={this.props.todo.isDone}  onChange={() => this.props.fooDoneDone(this.props.todo)} />
//                 </td>
//                 <td>
//                     {
//                         this.renderTodo()
//                     }
//                 </td>
//                 <td style={{ width: 100 }} className="text-center">
//                     <button onClick={() => this.props.fooDelete(this.props.todo.id)} className="btn btn-danger btn-sm">Delete</button>
//                 </td>
//             </React.Fragment>
//         );
//     }

//     renderTodo(){
//         if(this.props.todo.isDone)
//         return <s>{this.props.todo.value}</s>;
//         else
//         return this.props.todo.value;
//     }

// }

// export default Todo;
