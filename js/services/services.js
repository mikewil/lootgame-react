export default {
	saveItem(data) {
		let id,
			item,
			count,
			isStored = false;

		if (localStorage.length) {
			for (let i=1; i<localStorage.length; i++) {

				id = localStorage.key(i);
				item = JSON.parse(localStorage.getItem(id));

				if (item.pid === data.pid) {
					count = parseInt(item.count);
					item.count = count + data.count;
					localStorage.setItem(id, JSON.stringify(item));
					isStored = true;
				}
			}
			if (!isStored) {
				localStorage.setItem(localStorage.length + 1, JSON.stringify(data));
			}
		} else {
			localStorage.setItem(1, JSON.stringify(data));
		}
		
	},

	saveItems(data) {
		let id,
			item,
			count,
			isStored = false;

		for (let i=0; i<data.length; i++) {
			if (localStorage.length) {
				for (let j=0; j<localStorage.length; j++) {

					id = localStorage.key(j);
					item = JSON.parse(localStorage.getItem(id));

					if (item.pid === data[i].pid) {
						count = parseInt(item.count);
						item.count = count + data[i].count;
						localStorage.setItem(id, JSON.stringify(item));
						isStored = true;
					}
				}
				if (!isStored) {
					localStorage.setItem(localStorage.length + 1, JSON.stringify(data[i]));
				}
			} else {
				localStorage.setItem(i, JSON.stringify(data[i]));
			}
		}

	},

	getItems() {
		let items = [],
			id;

		if (localStorage.length) {
			for (let i=0; i<localStorage.length; i++) {
				id = localStorage.key(i);
				items.push(JSON.parse(localStorage.getItem(id)));
			}
		}

		return items;
		
	},

	deleteItem(data) {
		let id,
			item,
			count;

		if (localStorage.length) {
			for (let i=0; i<localStorage.length; i++) {
				id = localStorage.key(i);
				item = JSON.parse(localStorage.getItem(id));
				if (item.pid === data.pid) {
					count = item.count;
					if (item.count > 1) {
						item.count--;
						localStorage.setItem(id, JSON.stringify(item));
					} else {
						localStorage.removeItem(id);
					}
				}
			}
		}
	}

	// deleteAll() {

	// }
}