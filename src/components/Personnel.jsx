import React, { Component } from 'react'
import styles from './Style.module.css'

export default class Todo extends Component {
  render() {
    return (
      <div className={styles.bigItem}>
        <div className={styles.index}>
            <p>{this.props.index}</p>
            <img src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="react logo" className={styles.avatar}/>
            {/*<input */}
            {/*    className={styles.checkbox}*/}
            {/*    type='checkbox' */}
            {/*    defaultChecked={this.props.isDone} */}
            {/*    onChange={() => this.props.handleDone(this.props.todo)} */}
            {/*/>*/}
            <div className={styles.text}>
                <p>
                    {this.props.todo.fullName}
                </p>
                <p>
                    Паспортні дані: {this.props.todo.passportData}
                </p>
                <p>
                    Вік: {this.props.todo.age}
                </p>
                <p>
                    Заробітна плата: {this.props.todo.salary}
                </p>
                <p>
                    Освіта: {this.props.todo.education}
                </p>
                <p>
                    Спеціальність: {this.props.todo.specialty}
                </p>
                <p>
                    Посада: {this.props.todo.position}
                </p>
                <p>
                    Статус здоровʼя: {this.props.todo.healthStatus}
                </p>
                <p>
                    Дата надходженя в фірму: {this.props.todo.dateOfHiring}
                </p>
                <p>
                    Дата останнього призначення: {this.props.todo.lastAppointment}
                </p>
            </div>
        </div>
        <div >
            <button className={styles.delete} onClick={() => this.props.generateTerminationOrder(this.props.todo)}>Звільнити</button>
        </div>
      </div>
    )
  }
}
