import React, { Component } from 'react';
import FilterButton from '../filter-button';

//import './filter-panel.css';

// import FilterPanel from '../filter-panel';
export default class FilterPanel extends Component {

	buttons = [
		{ value: 'all', label: 'Все' },
		{ value: 'sweet', label: 'Сладкие' },
		{ value: 'non-sweet', label: 'Несладкие' },
	]

	// state = {
	// 	active: 0
	// }
	active = 'all'

	onFilter = (value) => {
		// this.setState({ active: value });
		this.active = value;
		this.props.setSweetness(value)
	}

	render() {
		return (
			<ul className="sweetness-menu">
				{
					this.buttons.map(({ label, value }, i) => (
						<li key={i}>
							<FilterButton
								value={value}
								label={label}
								active={this.active === value}
								onFilter={this.onFilter}
							/>
						</li>
					))
				}
			</ul>
		);
	}
}
