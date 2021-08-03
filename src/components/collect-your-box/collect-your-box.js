import React, { Component } from 'react';
import BoxHead from "../box-head";
import BoxRowAll from "../box-row-all";
import BoxMenu from "../box-menu";


import './collect-your-box.css';

export default class CollectYourBox extends Component {

	state = {
		min: 0,
		max: 9,
		donutsInBox: 9,
		currentDonutsInBox: 0,
		counters: {}
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
		return this.state.counters[id] > this.state.min
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

	render() {
		const { counters } = this.state;
		return (
			<div id="collect-your-box" className="collect-your-box">
				<div className="container">
					<div className="collect-your-box__body">
						<BoxHead />
						<div className="box-body">

							<BoxRowAll
								counters={counters}
								incCounter={this.incCounter}
								decCounter={this.decCounter}
								incIsPossible={this.incIsPossible}
								decIsPossible={this.decIsPossible}
								addCounters={this.addCounters}
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
						<div id="pre-perfect-donut" className="view-all">
							<div className="line"></div>
							<div className="box-bottom-form">
								<button className="btn btn-white box-bottom-btn">Показать всё</button>
							</div>
							<div className="line"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
