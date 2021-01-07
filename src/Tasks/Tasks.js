import React, { Component } from 'react';
import './Tasks.scss';

class Tasks extends Component {
	constructor(props) {
		super(props);
		this.task = React.createRef();
		this.state = {
			tasks: []
		}
	}

	addTask(event) {
		event.preventDefault();
		this.setState({
			tasks: [...this.state.tasks, this.task.current.value]
		})
		event.target.reset();
	}






	render() {
		return (
			<div className="Tasks">
				<form onSubmit={this.addTask.bind(this)}>
					<h3>Tasks:</h3>
					<p>Make a Todo list (add only):</p>
					<input placeholder="Your task..." ref={this.task} />
					<button>Add task</button>
				</form>
				<ul>
					{this.state.tasks.map((task, index) => {
						return <li key={index}>{task}</li>;
					})}
				</ul>

			</div>
		)
	}
}

export default Tasks;
