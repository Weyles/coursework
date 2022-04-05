import React, { Component } from 'react'
import styles from './Todos.module.css'
import Todo from './Todo';
import AddTodo from './AddTodo';

export default class Todos extends Component {
    constructor(props) {
      super(props)
        
      this.state = {
         placeholder: "",
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
      this.addTodo= this.addTodo.bind(this);
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

    handleInput = (value) => {
        this.setState({inputValue: value,});
    }

    addTodo() {
        if (this.state.inputValue) {
            const todos = [...this.state.todos];
            todos.push(
                {
                    id: this.getTimeId(),
                    value: this.state.inputValue,
                    isDone: false,
                }
            )
            this.setState({todos, inputValue: "", placeholder: "",});
        } else {
            this.setState({placeholder: "Please, enter a task"})
        }
    }

    clearInput = () => {
        this.setState({inputValue: '',});
    }

    render() {
    return (
      <div className={styles.container}>
        {
            this.state.todos.map((todo, index) => (
                <div key={todo.id} className={styles.task}>
                    <Todo 
                        todo={todo} 
                        index={index + 1} 
                        taskText={todo.value} 
                        isDone={todo.isDone} 
                        handleDone={this.handleDone} 
                        handleDelete={this.handleDelete}
                    />
                </div>
            ))
        }
        <AddTodo 
            handleInput={this.handleInput} 
            inputValue={this.state.inputValue}
            addTodo={this.addTodo}
            clearInput={this.clearInput}
            placeholder={this.state.placeholder}
        />
      </div>
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