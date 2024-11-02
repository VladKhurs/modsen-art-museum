import './index.scss';

import { FC, MouseEvent } from 'react';

import favoritesImg from '@/assets/favorites-danger.svg';
import { ButtonFavoriteProps } from '@/types/componentsTypes';
import { useFavoriteStatus, useChangeFavorite } from '@/utils/hooks';

const ButtonFavorite: FC<ButtonFavoriteProps> = ({ card, updateFavorites }) => {
	const [isFavorite, setIsFavorite] = useFavoriteStatus(card);

	const changeFavorite = useChangeFavorite(
		card,
		isFavorite,
		setIsFavorite,
		updateFavorites
	);

	return (
		<button
			className={isFavorite ? 'button button--active' : 'button'}
			onClick={(e: MouseEvent<HTMLButtonElement, MouseEvent>) => {
				e.stopPropagation();
				changeFavorite();
			}}
		>
			<img src={favoritesImg} alt="favorites" />
		</button>
	);
};

export default ButtonFavorite;
