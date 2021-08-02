import React, { Component } from 'react';

import style from './counter-with-buttons.module.css';

import plus from "../../images/plus.svg";
import minus from "../../images/minus.svg";

// import CounterWithButtons from '../counter-with-buttons';
export default class CounterWithButtons extends Component {



	render() {
		const { width, height, addClasses } = this.props;
		const boxSize = {
			height,
			width: width || height * 3.6
		}
		const img = {
			width: height,
			borderRadius: '50%',
		}
		const fontSize = { fontSize: `${height * 0.85}px` };
		return (
			<div style={boxSize} className={style['box'] + ' ' + addClasses}>

				<button style={{ width: height }} className={style['button']}>
					<img style={img} src={minus} alt="-" />
				</button>

				<input
					style={fontSize}
					className={style['counter']}
					defaultValue="0"
					readOnly
					tabIndex="-1"
				/>

				<button style={{ width: height }} className={style['button']}>
					<img style={img} src={plus} alt="+" />
				</button>

			</div>
		);
	}
}
