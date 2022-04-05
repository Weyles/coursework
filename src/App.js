import React, { Component } from 'react'
import Todos from './components/Todos';
import styles from './App.module.css'

export default class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.text}>
          ToDo App
        </h1>
        <Todos />
      </div>
    )
  }
}
