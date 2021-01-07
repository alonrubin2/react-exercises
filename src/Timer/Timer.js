import React, { Component } from 'react';
import './Timer.scss';

class Timer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			time: 0
		}
	}

	startTimer = () => {
		this.time = setInterval(() => {
			this.setState({
				time: this.state.time + 1
			})
		}, 1000)
	}

	stopTimer() {
		clearInterval(this.time)
	}

	resetTimer() {
		this.setState({
			time: 0
		})
	}

	render() {
		return (
			<div className="Timer">
				<h3>Timer</h3>
				<ul className="Timer__explanation">
					<li><b>Play:</b> the timer should count the seconds and keep updating</li>
					<li><b>Pause:</b> the timer freeze the timer</li>
					<li><b>Reset:</b> should set the timer to 0</li>
				</ul>
				<div className="Timer__actions">
					<button onClick={this.startTimer.bind(this)}>Play</button>
					<button onClick={this.stopTimer.bind(this)}>Pause</button>
					<button onClick={this.resetTimer.bind(this)}>Reset</button>
				</div>
				<div className="Timer__value">{this.state.time}</div>
			</div>
		)
	}
}

export default Timer;
