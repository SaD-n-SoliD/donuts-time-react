import React, { Component } from 'react';

import "./intro.css";

import packOfDonuts from "../../images/Donuts_v2.png";

export default class Intro extends Component {



	render() {
		return (
			<div className="intro">
				<div className="container">
					<div className="intro_body">
						<div>
							<div className="intro_titles">
								<p className="intro_suptitle brown">Все&nbsp;наши донаты оригинальны<span className="hide"> в&nbsp;сочетаниях вкусов</span></p>
								<h2 className="intro_title">Найди свой любимый</h2>
								<p className="intro_subtitle"><span className="hide">Концепция</span> DONUTS TIME - это&nbsp;авторские донаты с&nbsp;невероятным разнообразием начинок и&nbsp;топингов без&nbsp;использования <span className="hide">искусственных</span> добавок<span className="hide">, красителей и&nbsp;ароматизаторов</span></p>
							</div>
							<div className="row-btn">
								<form id="collect-your-box-link" className="btn-left" action="#collect-your-box-anchor" method="POST">
									<button className="btn btn-blue">Собрать коробку</button>
								</form>
								<form id="your-perfect-donut-link" className="btn-right" action="#your-perfect-donut-anchor" method="POST">
									<button className="btn btn-white">Создай свой донат</button>
								</form>
							</div>
							<div className="intro-bottom flex">
								<div className="intro-bottom_left flex">
									<div className="innertext_left">
										<p className="intro-bottom_headle brown">Создай Свой</p>
										<p className="intro-bottom_text">Предоставляем вам&nbsp;возможность создать свой идеальный донат</p>
									</div>
								</div>
								<div className="intro-bottom_right flex">
									<div className="innertext_right">
										<p className="intro-bottom_headle brown">Минимум калорий</p>
										<p className="intro-bottom_text hide">Особая технология приготовления не&nbsp;позволяет маслу впитаться внутрь изделий</p>
										<p className="intro-bottom_text show">Благодаря технологии масло не&nbsp;впитывается внутрь изделий</p>
									</div>
								</div>
							</div>
						</div>
						<div className="intro_donuts">
							<img className="intro_donuts_img" src={packOfDonuts} alt="" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
