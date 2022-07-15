import React, { Component } from 'react'
import Todos from './components/Todos';
import styles from './App.module.css'

const App = () => {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.text}>
          ToDo App
        </h1>
        <Todos />
      </div>
    )
}

export default App
