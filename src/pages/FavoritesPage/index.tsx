import './index.scss';

import { FC, lazy } from 'react';

import favorite from '@/assets/favorites-danger.svg';
import { Card } from '@/types/componentsTypes';
import { useFavorites } from '@/utils/hooks';

const CardSmall = lazy(() => import('@/components/UI/CardSmall'));

const FavoritesPage: FC = () => {
	const { favorites, updateFavorites } = useFavorites();

	return (
		<section className="favorites">
			<div className="container">
				<p className="h1">Here Are Your</p>
				<div className="row">
					<div>
						<img src={favorite} alt="" />
					</div>
					<p className="h1">Favorites</p>
				</div>

				<div className="heading">
					<p className="text-special">Saved by you</p>
					<h2 className="h2">Your favorites list</h2>
				</div>

				{favorites.length !== 0 ? (
					<div className="cards">
						{favorites.map((card: Card) => (
							<CardSmall
								card={card}
								key={`favorites-card-${card.id}`}
								updateFavorites={updateFavorites}
							/>
						))}
					</div>
				) : (
					<div className="text">No Favorites Yet</div>
				)}
			</div>
		</section>
	);
};

export default FavoritesPage;
