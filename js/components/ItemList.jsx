import React from 'react';
import Item from './Item.jsx';
import {Modal, Button} from 'react-bootstrap';

export default class ItemList extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let list;

		// If container is empty, say so
		if (this.props.container.length) {
			list = [];
			this.props.container.map((item, i) => {
				list.push(<Item key={i} item={item} />);
			});
		} else {
			list = <h3 className="empty">This container is empty</h3>;
		}

		return (
			<Modal className="item-container" show={this.props.show} onHide={this.props.close}>
				<Modal.Header>
					{this.props.title}
				</Modal.Header>
				<Modal.Body>
					<ul className="items">
						{list}
					</ul>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.close}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}