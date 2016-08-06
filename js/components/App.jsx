import React from 'react';
import ItemList from './ItemList.jsx';
import Inventory from './Inventory.jsx';
import {Navbar, Grid, Row, Col, Button} from 'react-bootstrap';

import {RANDOM_NUM, GET_CONTAINERS, GET_LOOT} from '../constants/methods';
import {CONTAINER_TYPES, CONTAINER_SIZES} from '../constants/containers';

import Services from '../services/services.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false,
			title: undefined,
			container: [],
			inventory: Services.getItems()
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
		let newList = this.state.container.filter((i) => {
			return i.pid !== item.pid
		});
		
		Services.saveItem(item);
		this.setState({container: newList, inventory: Services.getItems()})
		console.log(this.state);
	}

	takeAll = () => {
		Services.saveItems(this.state.container);
		this.setState({container: [], inventory: Services.getItems()})
	}

	deleteItem = (item) => {
		Services.deleteItem(item);
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
							<Inventory inventory={this.state.inventory} deleteItem={this.deleteItem} />
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