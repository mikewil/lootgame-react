import React from 'react';
import ItemList from './ItemList.jsx';
import {Navbar, Grid, Row, Col, Button} from 'react-bootstrap';

import {RANDOM_NUM, GET_CONTAINERS, GET_LOOT} from '../constants/methods';
import {CONTAINER_TYPES, CONTAINER_SIZES} from '../constants/containers';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			title: undefined,
			container: []
		}

		this.containers = GET_CONTAINERS();
	}

	getButtonStyle(type) {
		switch (type) {
			case 'suitcase':
				return 'warning';
				break;
			case 'ammocrate':
				return 'success';
				break;
			case 'deskdrawer':
			default:
				return 'primary';
				break;
		}
	}

	open = (container) => {
		this.setState({showModal: true, title: container.title, container: GET_LOOT(container)});
	}

	close = () => {
		this.setState({showModal: false});
	}

	takeItem = (item) => {
		// TODO: Add item to Local Storage
		let newList = this.state.container.filter((i) => {
			return i.pid !== item.pid
		});
		
		this.setState({container: newList})
	}

	takeAll = () => {
		// TODO: Add items to Local Storage
		this.setState({container: []})
	}

	render() {
		return (
			<div>
				<Navbar>
					<Navbar.Brand>Loot Game</Navbar.Brand>
				</Navbar>
				<Grid>
					<Col sm={9}>
						<Row>
							{this.containers.map((container, i) => {
								return (
									<Col sm={3} key={i}>
										<Button onClick={() => this.open(container)} bsStyle={this.getButtonStyle(container.type)}>
											{container.title}
										</Button>
									</Col>
								);
							})}
						</Row>
					</Col>
					<Col sm={3}>
						<Row>
							Future home of the inventory.
						</Row>
					</Col>
				</Grid>
				<ItemList 
					title={this.state.title}
					show={this.state.showModal}
					close={this.close}
					takeItem={this.takeItem}
					takeAll={this.takeAll}
					container={this.state.container} />
			</div>
		);
	}
}