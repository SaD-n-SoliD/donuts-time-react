import React, { Component } from 'react';


// import './box-row-element.css';

export default class BoxRowItem extends Component {

	state = {
		img: null
	}


	componentDidMount() {
		import('../../images/' + this.props.data['donut_file_name']).then((img) => {
			this.setState({ img: img.default })
		})
	}

	render() {
		const { data } = this.props;
		return (
			<div className={'box-row-element active ' + data['sweetness']}>
				<div className="box-dunut">
					<img className="box-donut__img" src={this.state.img} alt="" />
				</div>

				<div className="box-underdonut-m">
					<p className="box-underdonut__title">
						<span className="left-dot-word">{data['first_component']}</span>{data['second_component']}
					</p>
					<p className="box-underdonut__text">{data['description']}</p>
					<div className={'box-price-count idd' + data['id']}>
						<p className="donut-price">{data['price'] + ' руб'}</p>
						<div className="donut-count">
							<div className="countform">
								<button className={'donut-count-button underdonut__button op50 minus-btn idd' + data['id']}>
									<span className="minus-paint"></span>
								</button>
							</div>
							<input className={'undercount-var idd' + data['id']} defaultValue="0" readOnly tabIndex="-1" />
							<div className="countform">
								<button className={'donut-count-button underdonut__button plus-btn idd' + data['id']}>
									<span className="minus-paint"></span><span className="plus-paint"></span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
