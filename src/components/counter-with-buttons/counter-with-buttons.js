import React, { Component } from 'react';

//import './counter-with-buttons.css';

// import CounterWithButtons from '../counter-with-buttons';
export default class CounterWithButtons extends Component {



	render() {
		return (
			<div className="perfect-donut-count donut-count">
				<div className="countform">
					<button className="donut-count-button underdonut__button perfect-minus">
						<span className="minus-paint"></span>
					</button>
				</div>
				<p className="perfect-count-var">1</p>
				<div className="countform">
					<button className="donut-count-button underdonut__button perfect-plus">
						<span className="minus-paint"></span><span className="plus-paint"></span>
					</button>
				</div>
			</div>
		);
	}
}
