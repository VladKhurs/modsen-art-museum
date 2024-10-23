import { Card } from '@/constants/types';
import './Favorites.scss';
import React, { useEffect, useState } from 'react';
import favorite from '@/assets/favorites-danger.svg';
import CardSmall from '@/components/UI/CardSmall/CardSmall';

const Favorites: React.FC = () => {
	const [favorites, setFavorites] = useState<Card[]>([]);
	
	useEffect(() => {
        const favoritesFromStorage = JSON.parse(sessionStorage.getItem('favorites') || '[]');
        setFavorites(favoritesFromStorage);
    }, []);

	const updateFavorites = () => {
        const updatedFavorites = JSON.parse(sessionStorage.getItem('favorites') || '[]');
        setFavorites(updatedFavorites);
    };
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
				
				{
					favorites.length !== 0 ?
					<div className='cards'>
					{
						favorites.map((card: Card) => 
							<CardSmall card={card} key={card.id} updateFavorites={updateFavorites}/>
						)
					}
				</div>
				:
				<div className='text'>No Favorites Yet</div>
				}

			</div>
		</section>
	);
};

export default Favorites;
