import React from 'react';

export default class Item extends React.Component {
	render() {
		return (
			<li className={this.props.item.pid + ' item'} onClick={this.props.clickHandler}>
				<div className="desc clearfix">
					<div className="image">
						<img src={'img/' + this.props.item.pid + '.png'} />
					</div>
					<div className="text">
						<h3>{this.props.item.name}</h3>
						<span>{this.props.item.desc}</span>
					</div>
					<div className="count">
						<span>{this.props.item.count}</span>
					</div>
				</div>
			</li>
		);
	}
}