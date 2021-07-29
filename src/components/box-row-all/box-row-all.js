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
		})
	}

	render() {
		return (
			<div className="box-row-m">

				{
					this.state.donutBlocks.map(el =>
						<BoxRowItem data={el} key={el.id} />
					)
				}

			</div>
		);
	}
}
