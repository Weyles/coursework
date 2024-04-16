import React, { Component } from 'react'
import HumanResourcesDepartment from './components/HumanResourcesDepartment';
import styles from './App.module.css'

const App = () => {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.text}>
          Відділ кадрів
        </h1>
        <HumanResourcesDepartment />
      </div>
    )
}

export default App
