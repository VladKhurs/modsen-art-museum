import './ButtonFavorite.scss'
import React, { useState, useEffect } from 'react';
import favoritesImg from '@/assets/favorites-danger.svg';
import { Card } from '@/constants/types';
import { addUnique } from '@/utils/functions';

interface ButtonFavoriteProps {
    card: Card;
    updateFavorites?: () => void;
}

const ButtonFavorite: React.FC<ButtonFavoriteProps> = ({ card, updateFavorites  }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(sessionStorage.getItem('favorites') || '[]');
        setIsFavorite(favorites.some((item: Card) => item.id === card.id));
    }, []);

    const changeFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        let favorites = JSON.parse(sessionStorage.getItem('favorites') || '[]');
        if (isFavorite) {
            favorites = favorites.filter((item: Card) => item.id !== card.id);
        } else {
            addUnique(favorites, card);
        }
        sessionStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(!isFavorite);
        if (updateFavorites) {
            updateFavorites()
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
