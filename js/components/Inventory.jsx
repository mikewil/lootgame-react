import React from 'react';
import Item from './Item.jsx';
import {Row, Button} from 'react-bootstrap';

export default class Inventory extends React.Component {

	itemCount(inventory) {
		let count = 0;

		for (let i=0; i<inventory.length; i++) {
			count += parseInt(inventory[i].count);
		}

		return count;
	}

	render() {
		let list,
			hasItems = false,
			itemCount = 0;

		// If inventory is empty, say so
		if (this.props.inventory.length) {
			list = [];
			hasItems = true;
			itemCount = this.itemCount(this.props.inventory);
			this.props.inventory.map((item, i) => {
				list.push(<Item key={i} item={item} clickHandler={() => this.props.deleteItem(item)} />);
			});
		} else {
			list = <h3 className="empty">Your inventory is empty.</h3>;
		}

		return (
			<aside className="inventory">
				{hasItems ? <p className="count">Total Items: {itemCount}</p> : null}
				<ul className="items">
					{list}
				</ul>
				<Row>
					{hasItems ? <Button bsStyle="danger" onClick={this.props.deleteAll}>Remove All</Button> : null}
				</Row>
			</aside>
		);
	}
}