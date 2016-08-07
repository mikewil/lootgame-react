import React from 'react';

export default class Item extends React.Component {
	render() {
		return (
			<li className={this.props.item.pid + ' item'} onClick={this.props.clickHandler}>
				<div className="desc clearfix">
					<h3>{this.props.item.name}</h3>
					<span className="pull-left">{this.props.item.desc}</span>
					<span className="pull-right">{this.props.item.count}</span>
				</div>
			</li>
		);
	}
}