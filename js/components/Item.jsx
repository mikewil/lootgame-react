import React from 'react';

export default class Item extends React.Component {
	render() {
		return (
			<li className="item">
				{this.props.item.desc}
			</li>
		);
	}
}