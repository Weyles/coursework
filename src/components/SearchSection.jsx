import React, {Component} from 'react'
import styles from './Style.module.css'

export default class SearchSection extends Component {
    handleChange = (e) => {
        this.props.handleInput(e.target.value);
        console.log(this.props)
    }

    render() {
        return (
            <div className={styles.item}>
                <div className={styles.inputArea}>
                    <div>
                        <input className={styles.input} placeholder={this.props.placeholder}
                               value={this.props.inputValue} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button className={styles.addButton} onClick={() => this.props.filterObjectsByParams()}>Пошук</button>
                    </div>
                </div>
                <div className={styles.filterZone}>
                    Фільтри:
                    <div>
                        <button className={styles.filterButton} onClick={() => this.props.filterByAge()}>Передпенсійний вік</button>
                    </div>
                    <div>
                        <button className={styles.filterButton} onClick={() => this.props.filterByAge2()}>Пенсійний вік</button>
                    </div>
                </div>

            </div>
        )
    }
}
