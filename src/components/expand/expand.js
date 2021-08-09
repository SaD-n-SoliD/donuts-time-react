import React, { Component } from 'react';
import Button from '../button';

import './expand.css';

// import Expand from '../expand';
export default class Expand extends Component {



	render() {
		return (
			<div id="pre-perfect-donut" className="expand">
				<div className="line"></div>
				<div className="box-bottom-form">
					<Button
						label="Показать всё"
						classNames="btn-white box-bottom-btn"
					/>
				</div>
				<div className="line"></div>
			</div>
		);
	}
}
