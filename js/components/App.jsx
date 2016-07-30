import React from 'react';
import ItemList from './ItemList.jsx';
import {RANDOM_NUM} from '../constants/methods';
import {CONTAINER_TYPES, CONTAINER_SIZES} from '../constants/containers';


export default class App extends React.Component {

	constructor(props) {
		super(props);

		this.nums = {
			numContainers: RANDOM_NUM(0, 8),
			size: RANDOM_NUM(0, CONTAINER_SIZES.length - 1),
			type: RANDOM_NUM(0, CONTAINER_TYPES.length - 1),
			chance: RANDOM_NUM(0, 100)
		};

		
	}

	render() {
		let props = this.nums;

		return (
			<button type="button" className="container" data-size={CONTAINER_SIZES[props.size].type} data-type={CONTAINER_TYPES[props.type].type}>
				{CONTAINER_SIZES[props.size].type + ' ' + CONTAINER_TYPES[props.type].name}
			</button>
		);
	}
}