import React, { Component } from 'react';
import DBService from "../../services/db-service";
import AppHeader from '../app-header';
import Intro from '../intro';
import BestDonuts from '../best-donuts';
import CollectYourBox from '../collect-your-box';
import YourPerfectDonut from '../your-perfect-donut';
import FastOrder from '../fast-order';
import Slider from '../slider';
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
				<main className="main">
					<Intro />
					{/* <div className="container"> */}
					<BestDonuts />
					<CollectYourBox />
					<YourPerfectDonut />
					{/* </div> */}
					<FastOrder />
					<Slider />
				</main>
				<AppFooter />
			</div>
		);
	}
}