import './CardBig.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/constants/types';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';

interface CardBigProps {
    card: Card;
}

const CardBig: React.FC<CardBigProps> = ({ card }) => {
    const { title, artist_title, image_id, is_public_domain } = card;
    const navigate = useNavigate();

    return (
        <div className="card-big" onClick={() => {
            sessionStorage.setItem('detailInfo', JSON.stringify(card));
            navigate("detail-info");
        }}>
            <img 
                className="image" 
                src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} 
                alt={title} 
            />
            <div className="info">
                <div className="text">
                    <p className="text-medium">{title}</p>
                    <p className="text-special">{artist_title === null ? 'Unknown Artist' : artist_title}</p>
                    <p className="text-small">{is_public_domain ? 'Public' : 'Not Public'}</p>
                </div>
                <ButtonFavorite card={card} />
            </div>
        </div>
    );
};

export default CardBig;
