import React, { Component } from 'react';
import ChooselistItem from '../chooselist-item';
import DBService from "../../services/db-service";

//import './chooselist.css';

// import Chooselist from '../chooselist';
export default class Chooselist extends Component {

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
			<div className="choose-list">

				{
					this.state.donutBlocks.map(el =>
						<ChooselistItem data={el} key={el.id} />
					)
				}

			</div>
		);
	}
}
