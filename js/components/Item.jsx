import React from 'react';

export default class Item extends React.Component {
	render() {
		return (
			<li className={this.props.item.pid + ' item'}>
				<div className="desc">
					<h3>{this.props.item.name}</h3>
					<span>{this.props.item.desc}</span>
					<span>{this.props.item.count}</span>
				</div>

			</li>
		);
	}
}