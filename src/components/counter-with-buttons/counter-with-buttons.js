import React, { Component } from 'react';

import style from './counter-with-buttons.module.css';

import plus from "../../images/plus.svg";
import minus from "../../images/minus.svg";

// import CounterWithButtons from '../counter-with-buttons';
export default class CounterWithButtons extends Component {



	render() {
		const fn = () => { };
		const { width, height, id, value = 0, addClasses = '', incCounter = fn, decCounter = fn, incIsPossible = fn, decIsPossible = fn } = this.props;

		const boxSize = {
			height,
			width: width || height * 3.6
		}
		const img = {
			width: height,
			borderRadius: '50%',
		}
		const fontSize = { fontSize: `${height * 0.85}px` };
		// console.log(id, decIsPossible);
		return (
			<div style={boxSize} className={style.box + ' ' + addClasses}>

				<button
					type="button"
					style={{ width: height }}
					className={style.button}
					onClick={() => decCounter(id)}
				>
					<img
						className={decIsPossible(id) ? '' : style.disabled}
						style={img}
						src={minus}
						alt="-"
					/>
				</button>

				{/* <div
					style={fontSize}
					className={style['counter']}
				>
					{value}
				</div> */}
				<input
					style={fontSize}
					className={style.counter}
					value={value}
					readOnly
					tabIndex="-1"
				/>

				<button
					type="button"
					style={{ width: height }}
					className={style.button}
					onClick={() => incCounter(id)}
				>
					<img
						className={incIsPossible(id) ? '' : style.disabled}
						style={img}
						src={plus}
						alt="+"
					/>
				</button>

			</div>
		);
	}
}
