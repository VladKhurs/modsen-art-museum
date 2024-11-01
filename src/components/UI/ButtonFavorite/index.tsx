import './index.scss';

import { FC, useEffect, useState } from 'react';

import favoritesImg from '@/assets/favorites-danger.svg';
import { ButtonFavoriteProps, Card } from '@/types/componentsTypes';
import { SessionStorageUtils } from '@/utils/sessionStorageUtils';

const ButtonFavorite: FC<ButtonFavoriteProps> = ({ card, updateFavorites }) => {
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const favorites = SessionStorageUtils.getItem('favorites') || [];
		setIsFavorite(favorites.some((item: Card) => item.id === card.id));
	}, []);

	const changeFavorite = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.stopPropagation();
		let favorites = SessionStorageUtils.getItem('favorites') || [];
		if (isFavorite) {
			favorites = favorites.filter((item: Card) => item.id !== card.id);
		} else {
			SessionStorageUtils.addUniqueCard('favorites', favorites, card);
		}
		SessionStorageUtils.setItem('favorites', favorites);
		setIsFavorite(!isFavorite);
		if (updateFavorites) {
			updateFavorites();
		}
	};

	return (
		<button
			className={isFavorite ? 'button button--active' : 'button'}
			onClick={changeFavorite}
		>
			<img src={favoritesImg} alt="favorites" />
		</button>
	);
};

export default ButtonFavorite;
