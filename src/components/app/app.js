import React, { Component } from 'react';
import DBService from "../../services/db-service";
import AppHeader from '../app-header';
import AppFooter from '../app-footer';

import './app.css';

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
	// constructor(props) {
	// 	super(props);
	// 	this.updateText();
	// }

	render() {
		return (
			<div className="wrapper">
				<AppHeader />

				<AppFooter />
			</div>
		);
	}
}