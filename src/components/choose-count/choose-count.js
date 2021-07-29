import React, { Component } from 'react';

//import './choose-count.css';

// import ChooseCount from '../choose-count';
export default class ChooseCount extends Component {



	render() {
		return (
			<div className="donut-count-in-box">
				<div className="count-in-box-form">
					<button type="button" id="count-in-box-btn-3" className="count-in-box-btn">3</button>
				</div>
				<div className="count-in-box-form">
					<button type="button" id="count-in-box-btn-6" className="count-in-box-btn">6</button>
				</div>
				<div className="count-in-box-form">
					<button type="button" id="count-in-box-btn-9" className="count-in-box-btn active">9</button>
				</div>
			</div>
		);
	}
}
