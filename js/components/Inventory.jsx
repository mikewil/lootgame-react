import React from 'react';
import Item from './Item.jsx';
import {Row, Button} from 'react-bootstrap';

export default class Inventory extends React.Component {

	render() {
		let list,
			hasItems = false;

		// If inventory is empty, say so
		if (this.props.inventory.length) {
			list = [];
			hasItems = true;
			this.props.inventory.map((item, i) => {
				list.push(<Item key={i} item={item} clickHandler={() => this.props.deleteItem(item)} />);
			});
		} else {
			list = <h3 className="empty">Your inventory is empty.</h3>;
		}

		return (
			<aside>
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