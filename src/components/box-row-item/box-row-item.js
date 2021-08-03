import React, { Component } from 'react';
import CounterWithButtons from "../counter-with-buttons";

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
		const { data, incCounter, decCounter, incIsPossible, decIsPossible, counter } = this.props;
		// console.log(decIsPossible, 'wtf');

		return (
			<div className={'box-row-element active ' + data['sweetness']}>
				<div className="box-dunut">
					<img className="box-donut__img" src={this.state.img} alt="" />
				</div>

				<div className="box-underdonut-m">
					<p className="box-underdonut__title">
						<span className="left-dot-word">{data['first_component']}</span>{data['second_component']}
					</p>
					<p className="box-underdonut__text"
						dangerouslySetInnerHTML={{ __html: data['description'] }}>
					</p>
					<div className={'box-price-count idd' + data['id']}>
						<p className="donut-price">{data['price'] + ' руб'}</p>
						<CounterWithButtons
							height={22}
							addClasses='donut-count'
							incCounter={incCounter}
							decCounter={decCounter}
							incIsPossible={incIsPossible}
							decIsPossible={decIsPossible}
							id={data.id}
							value={counter}
						/>

					</div>
				</div>
			</div>
		);
	}
}
