import React, { Component } from 'react';
import BoxRowItem from "../box-row-item";
import DBService from "../../services/db-service";

// import './box-row-all.css';

export default class BoxRowAll extends Component {

	db = new DBService();

	state = {
		donutBlocks: []
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

	render() {
		const { incCounter, decCounter, incIsPossible, decIsPossible, counters } = this.props;

		return (
			<div className="box-row-m">

				{
					this.state.donutBlocks.map(el =>
						<BoxRowItem
							incCounter={incCounter}
							decCounter={decCounter}
							incIsPossible={incIsPossible}
							decIsPossible={decIsPossible}
							counter={counters[el.id]}
							data={el}
							key={el.id}
						/>
					)
				}

			</div>
		);
	}
}
