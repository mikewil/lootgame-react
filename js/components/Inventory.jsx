import React from 'react';

export default class Inventory extends React.Component {

	render() {
		return (
			<ul className="items">
				{this.props.inventory.map((item, i) => {
					return (
						<li key={i} className={item.pid + ' item'} onClick={this.props.deleteItem(item)}>
							<div className="desc clearfix">
								<h3>{item.name}</h3>
								<span className="pull-left">{item.desc}</span>
								<span className="pull-right">{item.count}</span>
							</div>
						</li>
					);
				})}

			</ul>
		);
	}
}