import './CardSmall.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import favorites from '@/assets/favorites-danger.svg';
import { Card } from '@/constants/types';

interface CardSmallProps {
    card: Card;
}

const CardSmall: React.FC<CardSmallProps> = ({ card }) => {
    const { title, artist_title, image_id, is_public_domain } = card;
    const navigate = useNavigate();

    return (
        <div className="card-small" onClick={() => {
            sessionStorage.setItem('detailInfo', JSON.stringify(card));
            navigate("detail-info");
        }}>
            <div className="about">
                <img 
                    className="image" 
                    src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`} 
                    alt={title} 
                />
                <div className="text">
                    <p className="text-medium">{title}</p>
                    <p className="text-special">{artist_title === null ? 'Unknown Artist' : artist_title}</p>
                    <p className="text-small">{is_public_domain ? 'Public' : 'Not Public'}</p>
                </div>
            </div>
            <button>
                <img src={favorites} alt="favorites" />
            </button>
        </div>
    );
};

export default CardSmall;
