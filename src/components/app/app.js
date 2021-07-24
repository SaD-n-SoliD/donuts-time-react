import React, { Component } from 'react';
import DBService from "../../services/db-service";

export default class App extends Component {
	db = new DBService();
	state = {
		text: ''
	};
	updateText() {
		this.db.getDonuts().then(text => {
			this.setState(
				{ text }
			)
		})
	}
	constructor(props) {
		super(props);
		this.updateText();
	}

	render() {
		return (
			<div>
				hi!<br />
				{this.state.text}
			</div>
		);
	}
}