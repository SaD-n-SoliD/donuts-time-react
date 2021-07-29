import React, { Component } from 'react';
import ChooseCount from '../choose-count';
import Chooselist from '../chooselist';


// import './box-menu.css';

export default class BoxMenu extends Component {



	render() {
		return (
			<form id="box-menu" className="box-menu" action="#collect-your-box">
				<p className="donuts-in-box">Пончиков в&nbsp;коробке:</p>
				<ChooseCount />
				<p className="your-choise">Вы&nbsp;выбрали:</p>
				<Chooselist />
				<p className="amount">Итого:<span className="blue"><span id="amount-var" className="amount-var"> 0 </span>руб</span></p>
				<div className="clist-total-form">
					<button type="submit" className="btn btn-blue">Оформить заказ</button>
				</div>
			</form>
		);
	}
}
