import React, { Component } from 'react';
import ChooseCountButton from '../choose-count-button';

//import './choose-count.css';

// import ChooseCount from '../choose-count';
export default class ChooseCount extends Component {

	state = {
		active: 9
	}

	onSetDonutsInBox = (count) => {
		this.props.setDonutsInBox(count);
		this.setState({ active: count })
	}

	render() {
		const { active } = this.state;
		return (
			<div className="donut-count-in-box">
				<ChooseCountButton
					active={active === 3}
					count={3}
					setDonutsInBox={this.onSetDonutsInBox}
				/>
				<ChooseCountButton
					active={active === 6}
					count={6}
					setDonutsInBox={this.onSetDonutsInBox}
				/>
				<ChooseCountButton
					active={active === 9}
					count={9}
					setDonutsInBox={this.onSetDonutsInBox}
				/>
			</div>
		);
	}
}
