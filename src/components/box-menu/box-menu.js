import React, { Component } from 'react';
import ChooseCount from '../choose-count';
import Chooselist from '../chooselist';
import BoxAmount from '../box-amount';


// import './box-menu.css';

export default class BoxMenu extends Component {



	render() {
		const { counters, setDonutsInBox, incCounter, decCounter, incIsPossible, decIsPossible } = this.props;
		return (
			<form id="box-menu" className="box-menu" action="#collect-your-box">
				<p className="donuts-in-box">Пончиков в&nbsp;коробке:</p>
				<ChooseCount
					setDonutsInBox={setDonutsInBox}
				/>
				<p className="your-choise">Вы&nbsp;выбрали:</p>
				<Chooselist
					counters={counters}
					incCounter={incCounter}
					decCounter={decCounter}
					incIsPossible={incIsPossible}
					decIsPossible={decIsPossible}
				/>
				<BoxAmount counters={counters} />
				<div className="clist-total-form">
					<button type="submit" className="btn btn-blue">Оформить заказ</button>
				</div>
			</form>
		);
	}
}
