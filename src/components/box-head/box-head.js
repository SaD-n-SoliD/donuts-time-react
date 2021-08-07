import React, { Component } from 'react';
import FilterPanel from '../filter-panel';

// import './box-head.css';

export default class BoxHead extends Component {



	render() {
		const { setSweetness } = this.props;
		return (
			<div className="boxhead">
				<span id="collect-your-box-anchor"></span>
				<h2 className="block-title cb-title">Собери <span className="blue">свою коробку</span></h2>
				<FilterPanel
					setSweetness={setSweetness}
				/>
			</div>
		);
	}
}
