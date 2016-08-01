const CONTAINER_TYPES = [{
	type: 'deskdrawer',
	name: 'Desk Drawer',
	chance: 100,
	itemchance: {
		weapon: 20,
		consumable: 90,
		valuable: 50,
		explosive: 2,
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
		explosive: 2,
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
		explosive: 5,
		material: 60,
		accessory: 20
	}
}];

const CONTAINER_SIZES = [{
	type: 'small',
	name: 'Small',
	chance: 100,
	minCapacity: 0,
	maxCapacity: 5,
	maxLimit: 100
}, {
	type: 'medium',
	name: 'Medium',
	chance: 50,
	minCapacity: 2,
	maxCapacity: 10,
	maxLimit: 50
}, {
	type: 'large',
	name: 'Large',
	chance: 5,
	minCapacity: 5,
	maxCapacity: 15,
	maxLimit: 25
}, {
	type: 'epic',
	name: 'Epic',
	chance: 5,
	minCapacity: 15,
	maxCapacity: 25,
	maxLimit: 1
}];

export { CONTAINER_TYPES, CONTAINER_SIZES };