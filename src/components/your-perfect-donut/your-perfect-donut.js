import React, { Component } from 'react';
import CustomizeForm from '../customize-form';

import './your-perfect-donut.css';

import customDonut from "../../images/Donut_custom.png";

export default class YourPerfectDonut extends Component {



	render() {
		return (
			<div id="your-perfect-donut" className="your-perfect-donut">
				<div className="container">
					<div className="your-perfect-donut__body">
						<div className="block-title perfect-title">
							<span id="your-perfect-donut-anchor"></span>
							<h2 className="perfect-title-text">Создай свой <br className="show" /><span className="blue">идеальный</span> донат</h2>
						</div>
						<div className="perfect-body">
							<div className="perfect-donut-block"><img className="pefrect-donut__img"
								src={customDonut} alt="" /></div>
							<CustomizeForm />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
