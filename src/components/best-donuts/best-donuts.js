import React, { Component } from 'react';

import './best-donuts.css';

import centralDonut from '../../images/Donut_1.png';

export default class BestDonuts extends Component {



	render() {
		return (
			<div className="best-donuts">
				<div className="container">
					<div className="best-donuts__body">
						<div className="block-title bd-title">
							<h2>Почему наши<br className="show" /> донаты <span className="blue">лучшие</span></h2>
						</div>
						<div className="slogan-row">
							<div className="slogan-element slogan-top-left">
								<p className="slogan-title">Никакой "вчерашней"<br />продукции</p>
								<p className="slogan-text">Мы&nbsp;готовим наши донаты в&nbsp;ночное время, чтобы радовать любителей нашей выпечки исключительно свежим вкусом!</p>
							</div>
							<div className="slogan-element slogan-top-right">
								<p className="slogan-title">Минимальное<br />количество ккал</p>
								<p className="slogan-text">Благодаря особым технологиям масло во&nbsp;время жарки не&nbsp;впитывается во&nbsp;внутрь изделий, что&nbsp;делает донаты нежирными</p>
							</div>
						</div>
						<div className="central-donut">
							<img className="central-dunut__img" src={centralDonut} alt="" />
						</div>
						<div className="slogan-row bottom-slogans">
							<div className="slogan-element slogan-bottom-left">
								<p className="slogan-title">Возможность<br />создать свой донат</p>
								<p className="slogan-text">Огромное количество различных топингов, начинок и&nbsp;присыпок поможетвам создать свой авторский донат</p>
							</div>
							<div className="slogan-element slogan-bottom-right">
								<p className="slogan-title">Только натуральны<br />ингридиенты</p>
								<p className="slogan-text">Наши донаты без&nbsp;искусственных добавок, красителей и&nbsp;ароматизаторов. Мы&nbsp;за&nbsp;натуральные продукты</p>
							</div>
						</div>
						<div className="bd-bottom-plug"></div>
					</div>
				</div>
			</div>
		);
	}
}
