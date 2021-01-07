import React, { Component } from 'react';
import './YayValidator.scss';

class YayValidator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			background: 'white'
		}
	}

	includesGreen(event) {
		if (event.target.value.includes('yay')) {
			this.setState({
				background: 'green'
			})
		}
		else {
			this.setState({
				background: 'white'
			})
		}
	};
	                  

	render() {
		return (
			<div className="YayValidator">
				<p>
					When the input contains the value "yay",
					change the input's background color to <span className="YayValidator__sample">green</span>:
				</p>
				<input type="text" className="text-box" onChange={this.includesGreen.bind(this)} style={{background: this.state.background}} />
			</div>
		)
	}
}

export default YayValidator;
