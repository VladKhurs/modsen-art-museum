import { Card } from '@/types/componentsTypes';
import { SessionStorageUtils } from './sessionStorageUtils';

export const updateFavoritesInStorage = (card: Card, isFavorite: boolean) => {
	let favorites = SessionStorageUtils.getItem('favorites') || [];
	if (isFavorite) {
		favorites = favorites.filter((item: Card) => item.id !== card.id);
	} else {
		SessionStorageUtils.addUniqueCard('favorites', favorites, card);
	}
	SessionStorageUtils.setItem('favorites', favorites);
};
