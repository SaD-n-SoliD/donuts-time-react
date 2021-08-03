import React, { Component } from 'react';
import Amount from '../amount';
import DBService from "../../services/db-service";

//import './box-amount.css';

// import BoxAmount from '../box-amount';
export default class BoxAmount extends Component {

	db = new DBService();

	prices = {}

	componentDidMount() {
		this.setPrices()
	}

	setPrices() {
		this.db.getDonutBlocks().then(donutBlocks => {
			donutBlocks.forEach(el => {
				let prices = this.prices;
				this.prices = { ...prices, [el.id]: el.price }
			});
		})
	}

	calcAmount() {
		let amount = 0;
		for (let key in this.prices) {
			amount += this.prices[key] * this.props.counters[key]
		}
		return amount
	}

	render() {
		return (
			<Amount amount={this.calcAmount()} />
		);
	}
}
