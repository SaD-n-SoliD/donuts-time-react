import React, { Component } from 'react';

import './expand.css';

// import Expand from '../expand';
export default class Expand extends Component {



	render() {
		return (
			<div id="pre-perfect-donut" className="expand">
				<div className="line"></div>
				<div className="box-bottom-form">
					<button className="btn btn-white box-bottom-btn">Показать всё</button>
				</div>
				<div className="line"></div>
			</div>
		);
	}
}
