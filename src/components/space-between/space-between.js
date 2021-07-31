import React, { Component } from 'react';

import './space-between.css';

// import SpaceBetween from '../space-between';
export default class SpaceBetween extends Component {



	render() {
		let items = this.props.items.map((item, i) => <div className={'space-between-element-' + i} key={i}>{item}</div>)
		return (
			<div className="space-between-flex-container">
				{
					items
				}
			</div>
		);
	}
}
