import React, { Component } from 'react';
import './Weather.scss';

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hottest: 0,
			coldest: 0
		}
	}

	componentDidMount() {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
			.then(res => res.json())
			.then(days => {
				this.setState({
					hottest: this.getHottestDay(days),
					coldest: this.getColdestDay(days)
				})
			})
	}

	getHottestDay(days) {
		let hottest = days[0].temperature;
		days.forEach(day => {
			if (day.temperature > hottest) {
				hottest = day.temperature;
			}
		});
		return hottest;
	}

	getColdestDay(days) {
		let coldest = days[0].temperature;
		days.forEach(day => {
			if (day.temperature < coldest) {
				coldest = day.temperature;
			}
		});
		return coldest;
	}


	render() {
		return (
			<div className="Weather">
				<p>
					Use the following API to display the hottest and coldest days:<br />
					<code>https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json</code>
				</p>
				<div className="Weather__stats">
					<strong>Hottest day is: {this.state.hottest}</strong>
				</div>
				<div className="Weather__stats">
					<strong>Coldest day is: {this.state.coldest}</strong>
				</div>
			</div>
		)
	}
}

export default Weather;
