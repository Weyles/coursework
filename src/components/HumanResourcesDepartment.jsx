import React, {Component} from 'react'
import Personnel from './Personnel';
import SearchSection from './SearchSection';
import personnel from './data'

export default class HumanResourcesDepartment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            placeholder: "Введіть дані спеціаліста",
            inputValue: '',
            selectedOption: 'name',
            personnel: personnel,
        }
    }

    filterObjectsByParams = () => {
        const filteredData = personnel.filter(person => {
            for (const prop in person) {
                if (typeof person[prop] === 'string' || typeof person[prop] === 'number') {
                    const propValue = String(person[prop]).toLowerCase();
                    if (propValue.includes(this.state.inputValue.toLowerCase())) {
                    return true
                    }
                }
            }
            return false;
        });
        this.setState({personnel: filteredData});
    }

    filterByAge = () => {
        const filteredByAgeData = personnel.filter(person => person.age >= 60 && person.age <= 65);
        this.setState({personnel: filteredByAgeData});
    }

    filterByAge2 = () => {
        const filteredByAgeData = personnel.filter(person => person.age >= 65);
        this.setState({personnel: filteredByAgeData});
    }

    handleOptionChange = (e) => {
        this.setState({
            selectedOption: e
        });
    };

    handleInput = (value) => {
        this.setState({inputValue: value,});
    }

    clearInput = () => {
        this.setState({inputValue: '',});
    }

    generateTerminationOrder = (employee) => {
        const terminationOrder = `Наказ про звільнення\n\n` +
            `Ім'я: ${employee.fullName}\n` +
            `Паспортні дані: ${employee.passportData}\n` +
            `Освіта: ${employee.education}\n` +
            `Спеціальність: ${employee.specialty}\n` +
            `Відділ: ${employee.department}\n` +
            `Посада: ${employee.position}\n` +
            `Зарплата: ${employee.salary}\n` +
            `Вік: ${employee.age}\n` +
            `Стан здоров'я: ${employee.healthStatus}\n` +
            `Дата прийняття на роботу: ${employee.dateOfHiring}\n` +
            `Останнє призначення: ${employee.lastAppointment}\n\n` +
            `Відповідно до рішення керівництва компанії, працівник звільняється зі своєї посади.\n` +
            `Причина звільнення: _____________________________________________________________\n\n` +
            `Підпис керівника: ___________________     Дата: ________________\n` +
            `Підпис працівника: ___________________     Дата: ________________\n`;

    }
    render() {
        return (
            <div>
                <SearchSection
                    handleInput={this.handleInput}
                    inputValue={this.state.inputValue}
                    clearInput={this.clearInput}
                    placeholder={this.state.placeholder}
                    selectedOption={this.state.selectedOption}
                    handleOptionChange={this.handleOptionChange}
                    filterObjectsByParams={this.filterObjectsByParams}
                    filterByAge={this.filterByAge}
                    filterByAge2={this.filterByAge2}
                />
                {
                    this.state.personnel.map((todo, index) => (
                        <div key={todo.id}>
                            <Personnel
                                todo={todo}
                                index={index + 1}
                                taskText={todo.value}
                                generateTerminationOrder={this.generateTerminationOrder}
                            />
                        </div>
                    ))
                }
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