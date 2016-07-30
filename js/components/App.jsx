import React from 'react';
import ItemList from './ItemList.jsx';
import {Button} from 'react-bootstrap';

import {RANDOM_NUM} from '../constants/methods';
import {CONTAINER_TYPES, CONTAINER_SIZES} from '../constants/containers';


export default class App extends React.Component {

	render() {
		let buttons = [],
			numContainers = RANDOM_NUM(0, 8);

		for (let i = 0; i < numContainers; i++) {
			
			let size = RANDOM_NUM(0, CONTAINER_SIZES.length - 1),
				type = RANDOM_NUM(0, CONTAINER_TYPES.length - 1),
				chance = RANDOM_NUM(0, 100);

			if (CONTAINER_SIZES[size].chance >= chance && CONTAINER_TYPES[type].chance >= chance) {
				buttons.push(
					<Button type="button" className="container" data-size={CONTAINER_SIZES[size].type} data-type={CONTAINER_TYPES[type].type}>
						{CONTAINER_SIZES[size].type + ' ' + CONTAINER_TYPES[type].name}
					</Button>
				);
			}
		}

		return (
			<div>
				{buttons}
			</div>
		);
	}
}