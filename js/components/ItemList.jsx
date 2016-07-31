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
			list = <li>This container is empty</li>;
		}

		return (
			<Modal show={this.props.show} onHide={this.props.close}>
				<Modal.Header>
					{this.props.title}
				</Modal.Header>
				<Modal.Body>
					<ul>
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