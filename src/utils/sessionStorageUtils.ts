import { Card } from '@/types/componentsTypes';

export const SessionStorageUtils = {
	getItem: (key: string) => {
		const item = sessionStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	},

	setItem: (key: string, value: any) => {
		sessionStorage.setItem(key, JSON.stringify(value));
	},

	addUniqueCard: (key: string, arr: Card[], newItem: Card) => {
		if (!arr.some((item) => item.id === newItem.id)) {
			arr.push(newItem);
			sessionStorage.setItem(key, JSON.stringify(arr));
		}
	},
};
