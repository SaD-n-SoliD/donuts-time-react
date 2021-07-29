import React, { Component } from 'react';

//import './chooselist-item.css';

// import ChooselistItem from '../chooselist-item';
export default class ChooselistItem extends Component {



	render() {
		const { data } = this.props;
		return (
			<div className="chooselist-element">
				<p className="donut-name">
					<span className="lil-left-dot-word">{data['first_component']}</span>
					{data['second_component']}
				</p>
				<div className="clist-element-count">
					<div className="clist-countform">
						<button className={'donut-count-button clist-count-button op50 minus-btn idd' + data['id']}>
							<span className="minus-paint"></span>
						</button>
					</div>
					<input type="text" className={'clist-count-var idd' + data['id']} name={'idd' + data['id']} readOnly defaultValue="0" tabIndex="-1" />
					<div className="clist-countform">
						<button className={'donut-count-button clist-count-button plus-btn idd' + data['id']}>
							<span className="minus-paint"></span><span className="plus-paint"></span>
						</button>
					</div>
				</div>
			</div>
		);
	}
}
