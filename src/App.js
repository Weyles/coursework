import React, { Component } from 'react'
import Todos from './components/Todos';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <Todos />
      </div>
    )
  }
}
