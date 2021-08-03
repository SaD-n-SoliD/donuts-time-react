import React, { Component } from 'react';
import CounterWithButtons from "../counter-with-buttons";

import style from './chooselist-item.module.css';

// import ChooselistItem from '../chooselist-item';
export default class ChooselistItem extends Component {



	render() {
		const { data, incCounter, decCounter, incIsPossible, decIsPossible, counter } = this.props;

		return (
			<div className="chooselist-element">
				<p className="donut-name">
					<span className="lil-left-dot-word">{data['first_component']}</span>
					{data['second_component']}
				</p>
				<div className={style["counter-with-buttons-outer"]}>

					<CounterWithButtons
						height={16}
						width={50}
						incCounter={incCounter}
						decCounter={decCounter}
						incIsPossible={incIsPossible}
						decIsPossible={decIsPossible}
						id={data.id}
						value={counter}
					/>

				</div>
			</div>
		);
	}
}
