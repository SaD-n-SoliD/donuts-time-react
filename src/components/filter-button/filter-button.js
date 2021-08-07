import React, { Component } from 'react';

import './filter-button.css';

// import FilterButton from '../filter-button';
export default class FilterButton extends Component {

	render() {
		const { value, label, active, onFilter } = this.props;
		return (
			<button
				className={'sweetness-btn' + (active ? ' active' : '')}
				onClick={() => onFilter(value)}
			>
				{label}
			</button>
		);
	}
}
