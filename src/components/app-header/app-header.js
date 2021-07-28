import React, { Component } from 'react';

import "./app-header.css";

import logo from "../../images/Logo.png";
import buy from "../../images/buy.png";

export default class AppHeader extends Component {



	render() {
		return (
			<header className="header">
				<div className="innerhead">
					<div className="header__body">
						<div className="project_name">
							<h1 className="donuts">D<img className="logo" src={logo} alt="o" />nuts time</h1>
							<p className="master down">Мастерская донатов</p>
						</div>

						<nav className="header__menu">
							<ul className="menu">
								<li><a href="##">О нас</a></li>
								<li><a href="##">Каталог</a></li>
								<li><a href="##">Создай свой</a></li>
								<li><a href="##">Доставка</a></li>
								<li><a href="##">Отзывы</a></li>
								<li><a href="##">Контакты</a></li>
							</ul>
						</nav>
						<div className="buy_block"><a href="##"><img className="buy" src={buy} alt="Корзина" /></a>
						</div>
						<div className="adress_block">
							<p className="town rel">Одесса</p>
							<p className="adress down">ул. Приморская 9</p>
						</div>
						<div className="phone_block">
							<p className="phone">+38 099 623 567 498</p>
							<p className="call down"><a href="##">Заказать звонок</a></p>
						</div>
						<div className="header__burger">
							<span></span>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
