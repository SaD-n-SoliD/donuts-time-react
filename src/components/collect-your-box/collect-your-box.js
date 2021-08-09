import React, { Component } from 'react';
import BoxHead from "../box-head";
import BoxRowAll from "../box-row-all";
import BoxMenu from "../box-menu";
import Expand from '../expand';


import './collect-your-box.css';

export default class CollectYourBox extends Component {

	min = 0
	max = 9

	state = {
		donutsInBox: 9,
		currentDonutsInBox: 0,
		counters: {},
		sweetness: 'all',
		expanded: false
	}

	addCounters = (counters) => {
		this.setState({ counters })
	}


	changeCounterIfPossible = (id, change) => {
		const counter = this.state.counters[id];
		const lower = change(counter) < counter;
		if ((this.incIsPossible() && !lower) || (this.decIsPossible(id) && lower)) {
			this.setState(({ counters, currentDonutsInBox }) => {
				const counter = counters[id];
				return {
					counters: { ...counters, [id]: change(counter) },
					currentDonutsInBox: change(currentDonutsInBox)
				}
			});
		}
	}

	incIsPossible = () => {
		return this.state.currentDonutsInBox < this.state.donutsInBox
	}

	decIsPossible = (id) => {
		return this.state.counters[id] > this.min
	}

	incCounter = (id) => {
		this.changeCounterIfPossible(id, v => ++v)
	}

	decCounter = (id) => {
		this.changeCounterIfPossible(id, v => --v)
	}

	setDonutsInBox = (donutsInBox) => {
		this.setState({ donutsInBox })
	}

	setSweetness = (sweetness) => {
		this.setState({ sweetness })
	}

	render() {
		const { counters, sweetness, expanded } = this.state;
		return (
			<div id="collect-your-box" className="collect-your-box">
				<div className="container">
					<div className="collect-your-box__body">
						<BoxHead
							setSweetness={this.setSweetness}
						/>
						<div className="box-body">

							<BoxRowAll
								counters={counters}
								incCounter={this.incCounter}
								decCounter={this.decCounter}
								incIsPossible={this.incIsPossible}
								decIsPossible={this.decIsPossible}
								addCounters={this.addCounters}
								sweetness={sweetness}
								expanded={expanded}
							/>
							<BoxMenu
								counters={counters}
								incCounter={this.incCounter}
								decCounter={this.decCounter}
								incIsPossible={this.incIsPossible}
								decIsPossible={this.decIsPossible}
								setDonutsInBox={this.setDonutsInBox}
							/>

						</div>

						<Expand />
					</div>
				</div>
			</div>
		);
	}
}
