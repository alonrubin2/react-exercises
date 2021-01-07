import React, { Component } from 'react';
import './Remover.scss';

class Remover extends Component {

	constructor(props) {
		super(props);
		this.state = {
			students: [
				'Abby Mecoil',
				'Toni Zuck',
				'Peter Hanshfield',
				'Rose Tobernak'
			]
		};
	}

	removeStudent(num) {
		const newList = [...this.state.students];
		newList.splice(num, 1);
		this.setState({
			students: newList
		})
	}
	render() {
		return (
			<div className="Remover">
				<h3>Remover:</h3>
				<p>Add a delete button for each student to remove it from the list.</p>
				<ul className="Remover__list">
					{this.state.students.map((student, index) => {
						return <li key={index}>{student} <button onClick={this.removeStudent.bind(this, index)}>Remove</button></li>;
					})}
				</ul>
			</div>
		)
	}
}

export default Remover;
