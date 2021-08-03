import React, { Component } from 'react';

//import './amount.css';

// import Amount from '../amount';
export default class Amount extends Component {



	render() {
		return (
			<p className="amount">Итого:
				<span className="blue">
					<span id="amount-var" className="amount-var"> {this.props.amount || 0} </span>руб
				</span>
			</p>
		);
	}
}
