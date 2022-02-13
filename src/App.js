import React, { Component } from 'react';
import Todos from './components/Todos';

export default class App extends Component {
	render() {
		return (
			<div className='container'>
				<h1 className='text-center'>ToDo App in ReactJS</h1>
				<Todos />
			</div>
		)
	}
}
