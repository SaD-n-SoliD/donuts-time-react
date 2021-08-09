import React, { Component } from 'react';

import './button.css';

// import Button from '../button';
export default class Button extends Component {

	render() {
		const { classNames, label, onClick } = this.props;
		return (
			<button
				className={'btn ' + classNames}
				onClick={onClick}
			>
				{label}
			</button>
		);
	}
}
