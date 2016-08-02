import {CONTAINER_TYPES, CONTAINER_SIZES} from './containers';
import {ITEMS} from './items';

export function RANDOM_NUM(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function	GET_CONTAINERS() {
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

export function GET_LOOT(c) {
	let size = c.size,
		type = c.type,
		minCapacity,
		maxCapacity,
		maxLimit,
		item,
		itemChance,
		typeChance,
		lootAmt,
		contItemChance,
		count = 0,
		newItem,
		current = null,
		container = [];

	// Container size determines the minimum and maximum amount of items it can hold.
	// Higher maxLimit reduces the chance of spawning
	switch (size) {
		case 'small':
			minCapacity = CONTAINER_SIZES[0].minCapacity;
			maxCapacity = CONTAINER_SIZES[0].maxCapacity;
			maxLimit = CONTAINER_SIZES[0].maxLimit;
			break;
		case 'medium':
			minCapacity = CONTAINER_SIZES[1].minCapacity;
			maxCapacity = CONTAINER_SIZES[1].maxCapacity;
			maxLimit = CONTAINER_SIZES[1].maxLimit;
			break;
		case 'large':
			minCapacity = CONTAINER_SIZES[2].minCapacity;
			maxCapacity = CONTAINER_SIZES[2].maxCapacity;
			maxLimit = CONTAINER_SIZES[2].maxLimit;
			break;
		case 'epic':
			minCapacity = CONTAINER_SIZES[3].minCapacity;
			maxCapacity = CONTAINER_SIZES[3].maxCapacity;
			maxLimit = CONTAINER_SIZES[3].maxLimit;
			break;
	}

	// Container type determines item type chances.
	// For example, ammo crates have a higher chance to spawn weapons and accessories.
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
		newItem = ITEMS[item];

		// Add the item if it passes an individual item chance and container item type chance check
		if (newItem.chance >= itemChance && contItemChance[newItem.type] >= typeChance) {
			container.push(newItem);
		}
	}

	if (container.length) {

		// Sort items to aid in matching duplicates
		container.sort((a, b) => {
			if (a.pid > b.pid) {
				return 1;
			}
			if (a.pid < b.pid) {
				return -1;
			}
			return 0;
		});

		// Find duplicates, count them, and add count property
		for (let i = 0; i <= container.length - 1; i++) {
			current = current || container[0];

			if (container[i].pid !== current.pid) {
				current = container[i];
				count = 1;
			} else {
				count++;
			}

			container[i].count = count;
		}

		// Filter out duplicates
		container = container.filter((el, i, self) => self.findIndex((t) => {return t.pid === el.pid; }) === i)

	}

	return container;
}