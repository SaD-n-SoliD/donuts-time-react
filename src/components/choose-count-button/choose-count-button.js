import React, { Component } from 'react';

//import './choose-count-button.css';

// import ChooseCountButton from '../choose-count-button';
export default class ChooseCountButton extends Component {



	render() {
		const { active, count, setDonutsInBox } = this.props;
		return (
			<div className="count-in-box-form">
				<button
					type="button"
					className={`count-in-box-btn${active ? ' active' : ''}`}
					onClick={() => setDonutsInBox(count)}
				>
					{count}
				</button>
			</div>
		);
	}
}
