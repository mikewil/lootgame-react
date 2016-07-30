import React from 'react';
import {ITEMS} from '../constants/items';
import Item from './Item.jsx';

export default class ItemList extends React.Component {
	constructor(props) {
		props.items = ITEMS;
		super(props);
	}
	render() {
		return (
			<ul>
				<Item items={this.props.items} />
			</ul>
		);
	}
}