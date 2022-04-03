import React, { Component } from 'react'
import Todo from './Todo';
import AddTodo from './AddTodo';

export default class Todos extends Component {
    constructor(props) {
      super(props)
        
      this.state = {
         inputValue: '',
         todos: [
             {
                id: 1,
                value: "Geting done my project",
                isDone: false,
             },
             {
                id: 2,
                value: "Clear the room",
                isDone: true,
             },
             {
                id: 3,
                value: "Trying to sleep in 21:00",
                isDone: false,
             },
         ]
      }

      this.handleDone = this.handleDone.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
    }

    getTimeId() {
        let data = new Date();
        let timeId = data.getTime();
        return timeId;
    }

    handleDone(todo) {
        const todos = [...this.state.todos];
        todos.map((task) => {
            if (task.id === todo.id) {
                task.isDone = !task.isDone;
            } 
            return task;
        })
        this.setState({todos});
    }

    handleDelete(id) {
        const todos = this.state.todos.filter(todo => {
                return todo.id !== id;
        });
        this.setState({todos});
    }

    render() {
    return (
      <table>
        <tbody>
            {
                this.state.todos.map((todo, index) => (
                    <tr key={todo.id} >
                        <Todo 
                            todo={todo} 
                            index={index + 1} 
                            taskText={todo.value} 
                            isDone={todo.isDone} 
                            handleDone={this.handleDone} 
                            handleDelete={this.handleDelete}
                        />
                    </tr>
                ))
            }
            <AddTodo />
        </tbody>
      </table>
    )
  }
}

/* 
Не мог добавить индекс потому что он не был указан при регенерации масива в скобках (...os.map(todo, index) => (.... )) 
Bind-ть классовые функции нужно для того что-бы внутри них можно было ипользовать конструкцию this, я не мог найти state потому что не
забиндил функцию!!
свойство filter должно напрямую воздействовать на переменную, масив, иначе оно не работает (копию масива создавать нет потребности в отличии от
свойства map)
*/