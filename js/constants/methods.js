import {CONTAINER_TYPES, CONTAINER_SIZES} from './containers';
import {ITEMS} from './items';

export function RANDOM_NUM(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
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

			// Add the item if it passes an individual item chance and container item type chance check
			if (ITEMS[item].chance >= itemChance && contItemChance[ITEMS[item].type] >= typeChance) {
				container.push(ITEMS[item]);
			}
		}

		return container;
	}