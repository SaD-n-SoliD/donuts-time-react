import React, { Component } from 'react';

// import './box-head.css';

export default class BoxHead extends Component {



	render() {
		return (
			<div className="boxhead">
				<span id="collect-your-box-anchor"></span>
				<h2 className="block-title cb-title">Собери <span className="blue">свою коробку</span></h2>
				<ul className="sweetness-menu">
					<li className="">
						<button id="all-btn" className="sweetness-btn active">Все</button>
					</li>
					<li className="">
						<button id="sweet-btn" className="sweetness-btn">Сладкие</button>
					</li>
					<li className="">
						<button id="non-sweet-btn" className="sweetness-btn">Несладкие</button>
					</li>
				</ul>
			</div>
		);
	}
}
