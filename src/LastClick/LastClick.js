import React, { Component } from 'react';
import './LastClick.scss';

class LastClick extends Component {
	constructor(props) {
		super(props);
		this.state = {
			num: ''
		}
	}

	changeNum(event) {
		this.setState({
			num: event.target.value
		})
	}

	render() {
		return (
			<div className="LastClick">
				<p>
					There are <b>3</b> buttons.<br />
					Make the box show the number of the last clicked button.
				</p>
				<div className="LastClick__buttons">
					<button value='1' onClick={this.changeNum.bind(this)}>1</button>
					<button value='2' onClick={this.changeNum.bind(this)}>2</button>
					<button value='3' onClick={this.changeNum.bind(this)}>3</button>
				</div>
				<div className="LastClick__box">
{this.state.num}
				</div>
			</div>
		)
	}
}

export default LastClick;
