import './index.scss';

import { FC, MouseEvent } from 'react';

import favoritesImg from '@/assets/favorites-danger.svg';
import { ButtonFavoriteProps } from '@/types/componentsTypes';
import { useChangeFavorite, useFavoriteStatus } from '@/utils/hooks';

const ButtonFavorite: FC<ButtonFavoriteProps> = ({ card, updateFavorites }) => {
	const [isFavorite, setIsFavorite] = useFavoriteStatus(card);

	const changeFavorite = useChangeFavorite(
		card,
		isFavorite,
		setIsFavorite,
		updateFavorites
	);

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		changeFavorite();
	};

	return (
		<button
			className={isFavorite ? 'button button--active' : 'button'}
			onClick={handleClick}
		>
			<img src={favoritesImg} alt="favorites" />
		</button>
	);
};

export default ButtonFavorite;
