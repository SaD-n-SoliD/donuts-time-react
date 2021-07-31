import React, { Component } from 'react';
import CustomSelect from '../custom-select';

//import './perfect-selection.css';

// import PerfectSelection from '../perfect-selection';
export default class PerfectSelection extends Component {

	render() {
		return (
			<form action="#" className="custom-donut-form" id="custom-donut-form">
				<div className="custom-donut-element">
					<p className="part-name">Начинка</p>
					<CustomSelect addClasses='hide' options={[
						{ value: 60, price: 60, text: 'Шоколадно-кремовый тирамису' },
						{ value: 10, price: 10, text: 'случайный текст' },
					]} />
					<select name="n1" id="n1" className="part-choise show">
						<option data-price="60" value="60">Шоколадно-кремовый тирамису&nbsp;</option>
						<option data-price="10" value="10">случайный текст</option>
					</select>
					<div className="perfect-line"></div>
				</div>
				<div className="custom-donut-element">
					<p className="part-name">Крем</p>
					<CustomSelect addClasses='hide' options={[
						{ value: 40, price: 40, text: 'Шоколадно-ореховое пралине' },
						{ value: 11, price: 11, text: 'случайный текст' },
					]} />

					<select name="n2" id="n2" className="part-choise show">
						<option data-price="40" value="40">Шоколадно-ореховое пралине&nbsp;&nbsp;&nbsp;&nbsp;</option>
						<option data-price="11" value="11">случайный текст</option>
					</select>
					<div className="perfect-line"></div>
				</div>
				<div className="custom-donut-element">
					<p className="part-name">Присыпка</p>
					<CustomSelect addClasses='hide' options={[
						{ value: 15, price: 15, text: 'Стружка бельгийского шоколада' },
						{ value: 25, price: 25, text: 'текст' },
					]} />
					<select name="n3" id="n3" className="part-choise show">
						<option data-price="15" value="15">Стружка бельгийского шоколада</option>
						<option data-price="25" value="25">текст</option>
					</select>
					<div className="perfect-line"></div>
				</div>
			</form>

		);
	}
}
