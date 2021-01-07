import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [
				'Big fox',
				'Small elephant',
				'Big ant',
				'Small dinosaur',
				'Medium dog'
			], 
			filtered:[]
		};
	}
	componentDidMount() {
		this.setState({
			filtered: this.state.items
		})
	}

	filter(event) {
		const value = event.target.value.toLowerCase();
		this.setState({
			filtered: this.state.items.filter(item => item.toLowerCase().includes(value))
		})
	}



	render() {
		return (
			<div className="Filter">
				<p>Filter the list as you type.</p>
				<input placeholder="Search..." className="Filter__textbox" onChange={event => this.filter(event)} />
				<ul>
					{this.state.filtered.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</div>
		)
	}
}

export default Filter;
