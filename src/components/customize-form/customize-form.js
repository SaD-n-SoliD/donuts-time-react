import React, { Component } from 'react';
import CounterWithButtons from '../counter-with-buttons';
import PerfectSelection from '../perfect-selection';


//import './customize-form.css';

// import CustomizeForm from '../customize-form';
export default class CustomizeForm extends Component {



	render() {
		return (
			<div className="customize-donut-block">
				<div className="like-block"><img className="like__png" src="images/Like.png" alt="" /></div>
				<p className="fill-the-box">Дополни коробку своим<br className="show" /> авторским донатом!</p>
				<PerfectSelection />
				<div className="perfect-total">
					<p className="amount amount-perfect">Итого:<span className="blue"><span className="perfect-amount-var"> 0 </span>руб</span></p>
					<CounterWithButtons width={87} height={22} addClasses="perfect-donut-count" />
				</div>
				<div className="row-btn perfect-row-btn">
					<form className="btn-left perfect-btn-left" action="#">
						<button className="btn btn-blue perfect-btn">Оформить заказ</button>
					</form>
					<div className="btn-right">
						<button className="btn btn-white perfect-btn" type="submit" form="custom-donut-form">Добавить в коробку</button>
					</div>
				</div>
			</div>
		);
	}
}
