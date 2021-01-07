import React, { Component } from 'react';
import './SmartParagraph.scss';

class SmartParagraph extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of great explorers.',
			fullText: true
		};
	}

	toggleParagraphLength() {
		this.setState({
			fullText: !this.state.fullText
		})
	}



	render() {
		return (
			<div className="SmartParagraph">
				<p className="SmartParagraph__explanation">
					When clicking on "Toggle" button,
					the following paragraph should display only 100 characters.
					The challenge is cutting between words!
					Clicking again should show all of the text back.
				</p>
				<p className="SmartParagraph__value">
					{this.state.fullText ? this.state.text : this.state.text.slice(0, 99)}
				</p>
				<button onClick={this.toggleParagraphLength.bind(this)}>Toggle</button>
			</div>
		)
	}
}

export default SmartParagraph;
