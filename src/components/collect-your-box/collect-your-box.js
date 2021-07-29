import React, { Component } from 'react';
import BoxHead from "../box-head";
import BoxRowAll from "../box-row-all";
import BoxMenu from "../box-menu";


import './collect-your-box.css';

export default class CollectYourBox extends Component {



	render() {
		return (
			<div id="collect-your-box" className="collect-your-box">
				<div className="container">
					<div className="collect-your-box__body">
						<BoxHead />
						<div className="box-body">

							<BoxRowAll />
							<BoxMenu />

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
