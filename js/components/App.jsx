import React from 'react';
import ItemList from './ItemList.jsx';
import {Navbar, Grid, Row, Col, Button} from 'react-bootstrap';

import {RANDOM_NUM} from '../constants/methods';
import {CONTAINER_TYPES, CONTAINER_SIZES} from '../constants/containers';
import {ITEMS} from '../constants/items';


export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			title: undefined,
			container: []
		}

		this.containers = this.getContainers();
	}

	getContainers() {
		let containers = [],
			numContainers = RANDOM_NUM(0, 8);

		for (let i = 0; i < numContainers; i++) {
			
			let size = RANDOM_NUM(0, CONTAINER_SIZES.length - 1),
				type = RANDOM_NUM(0, CONTAINER_TYPES.length - 1),
				chance = RANDOM_NUM(0, 100),
				title;

			if (CONTAINER_SIZES[size].chance >= chance && CONTAINER_TYPES[type].chance >= chance) {
				title = CONTAINER_SIZES[size].name + ' ' + CONTAINER_TYPES[type].name;
				containers.push({
					size: CONTAINER_SIZES[size].type,
					type: CONTAINER_TYPES[type].type,
					chance: CONTAINER_SIZES[size].chance,
					title
				});
			}
		}

		return containers;
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

	getLoot(c) {
		let size = c.size,
			type = c.type,
			item,
			itemChance,
			typeChance,
			lootAmt,
			minCapacity,
			maxCapacity,
			maxLimit,
			contItemChance,
			container = [];

		switch (size) {
			case 'epic':
				minCapacity = 15;
				maxCapacity = 25;
				maxLimit = 1;
			case 'large':
				minCapacity = 5;
				maxCapacity = 15;
				maxLimit = 25;
				break;
			case 'medium':
				minCapacity = 2;
				maxCapacity = 10;
				maxLimit = 50;
				break;
			case 'small':
			default:
				minCapacity = 0;
				maxCapacity = 5;
				maxLimit = 100;
				break;
		}

		switch (type) {
			case 'deskdrawer':
				contItemChance = CONTAINER_TYPES[0].itemchance;
				break;
			case 'ammocrate':
				contItemChance = CONTAINER_TYPES[1].itemchance;
				break;
			case 'suitcase':
				contItemChance = CONTAINER_TYPES[2].itemchance;
				break;
		}

		// Randomly generated number of items
		lootAmt = RANDOM_NUM(minCapacity, maxCapacity);

		// Iterate through items, randomly pulling an item from the lookup each time
		for (let i = 0; i < lootAmt; i++) {
			item = RANDOM_NUM(0, ITEMS.length - 1);
			itemChance = RANDOM_NUM(1, maxLimit);
			typeChance = RANDOM_NUM(0, 100);

			// Add the item if it passes an individual item chance and container item type chance check
			if (ITEMS[item].chance >= itemChance && contItemChance[ITEMS[item].type] >= typeChance) {
				container.push(ITEMS[item]);
			}
		}

		return container;
	}

	open = (container) => {
		this.setState({showModal: true, title: container.title, container: this.getLoot(container)});
	}

	close = (container) => {
		this.setState({showModal: false});
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
				<ItemList title={this.state.title} show={this.state.showModal} close={this.close} container={this.state.container} />
			</div>
		);
	}
}