const CONTAINER_TYPES = [{
	type: 'deskdrawer',
	name: 'Desk Drawer',
	chance: 100,
	itemchance: {
		weapon: 20,
		consumable: 90,
		valuable: 50,
		explosive: 5,
		material: 50,
		accessory: 20
	}
}, {
	type: 'ammocrate',
	name: 'Ammo Crate',
	chance: 50,
	itemchance: {
		weapon: 80,
		consumable: 50,
		valuable: 2,
		explosive: 5,
		material: 50,
		accessory: 90
	}
}, {
	type: 'suitcase',
	name: 'Suitcase',
	chance: 30,
	itemchance: {
		weapon: 10,
		consumable: 20,
		valuable: 50,
		explosive: 15,
		material: 60,
		accessory: 20
	}
}];

const CONTAINER_SIZES = [{
	type: 'small',
	name: 'Small',
	chance: 100
}, {
	type: 'medium',
	name: 'Medium',
	chance: 50
}, {
	type: 'large',
	name: 'Large',
	chance: 25
}, {
	type: 'epic',
	name: 'Epic',
	chance: 5
}];

export { CONTAINER_TYPES, CONTAINER_SIZES };