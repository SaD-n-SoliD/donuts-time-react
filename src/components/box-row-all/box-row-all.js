import React, { Component } from 'react';
import BoxRowItem from "../box-row-item";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import DBService from "../../services/db-service";

// import './box-row-all.css';

export default class BoxRowAll extends Component {

	db = new DBService();

	timeout = 500

	state = {
		donutBlocks: [],
		sweetness: 'all'
	}

	componentDidMount() {
		this.db.getDonutBlocks().then(donutBlocks => {
			this.setState({ donutBlocks })
			this.props.addCounters(
				this.state.donutBlocks.reduce((acc, el) => {
					return { ...acc, [el.id]: 0 }
				}, {})
			)
		})
	}

	componentDidUpdate() {
		const { sweetness } = this.props;
		if (sweetness !== this.state.sweetness)
			setTimeout(() => {
				this.setState({ sweetness })
			}, this.timeout);
	}

	checkSweetness = (el) => {
		const { sweetness } = this.props;
		return (el.sweetness === sweetness || sweetness === 'all') ? true : false
	}

	render() {

		const { incCounter, decCounter, incIsPossible, decIsPossible, counters, sweetness, expanded } = this.props;

		this.shownItems = expanded ? undefined : 6;

		let items = (sweetness !== this.state.sweetness) ? null :
			this.state.donutBlocks.filter(this.checkSweetness).slice(0, this.shownItems).map(el =>
				<CSSTransition
					key={el.id}
					timeout={this.timeout}
					classNames="box-row-element"
				>
					<BoxRowItem
						incCounter={incCounter}
						decCounter={decCounter}
						incIsPossible={incIsPossible}
						decIsPossible={decIsPossible}
						counter={counters[el.id]}
						data={el}
					/>
				</CSSTransition>
			)

		return (
			<TransitionGroup
				className="box-row-m"
			>
				{items}
			</TransitionGroup>
		);
	}
}
