import React, { Component } from 'react';
import SpaceBetween from '../space-between';

import './custom-select.css';

// import CustomSelect from '../custom-select';
export default class CustomSelect extends Component {

	state = {
		value: null,
		text: null,
		price: null,
		hidden: true,
		selected: null
	}

	componentDidMount() {
		const { options } = this.props;
		if (Array.isArray(options) && options.length) this.setState({
			value: options[0].value,
			text: options[0].text,
			price: options[0].price,
			selected: 0
		})

	}

	onOpen = (e) => {
		this.setState(state => ({ hidden: !state.hidden }))
		e.currentTarget.focus()
	}

	onSelect = (e) => {
		const target = e.currentTarget;
		const { key, value, text, price } = target.dataset;
		this.setState({
			selected: +key,
			value,
			text,
			price,
			hidden: true
		});
	}

	onBlur = (e) => {
		const target = e.relatedTarget;
		if (!target || !target.closest('.custom-select-option')) this.setState({ hidden: true })
	}

	render() {
		const { options, addClasses } = this.props;
		const { state } = this;
		return (
			<div className={"custom-select-container customSelect" +
				(state.hidden ? '' : ' is-open') + ' ' + addClasses
			}>
				<span className="custom-select-opener part-choise"
					tabIndex="0"
					onClick={this.onOpen}
					onBlur={e => this.onBlur(e)}
				>
					{state.text ? <SpaceBetween items={[state.text, ` + ${state.price} руб`]} /> : null}
				</span>
				<div className={'custom-select-panel' + (state.hidden ? ' hidden' : '')}
				>
					{
						options.map((el, i) => (
							<div key={i}
								tabIndex="0"
								className={'custom-select-option' + (state.selected === i ? ' is-selected' : '')}
								data-value={el.value}
								data-text={el.text}
								data-price={el.price}
								data-key={i}
								onClick={this.onSelect}
							>
								<SpaceBetween items={[el.text, ` + ${el.price} руб`]} />
							</div>
						))
					}
				</div>
			</div>
		);
	}
}
