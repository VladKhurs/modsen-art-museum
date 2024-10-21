import './Gallery.scss';
import React, { useContext } from 'react';
import { Context } from '@/store/Context';
import CardBig from '@/components/UI/CardBig/CardBig';
import CardBigLoader from '@/components/UI/CardBig/CardBigLoader';
import Pagination from '@/components/UI/Pagination/Pagination';
import { ContextProps } from '@/constants/types';
import { Card } from '@/constants/types';

const Gallery: React.FC = () => {
    const { isLoading, cards } = useContext(Context) as ContextProps;

    return (
        <section className="gallery">
            <div className="heading">
                <p className="text-special">Topics for you</p>
                <h2 className="h2">Our special gallery</h2>
            </div>
            {isLoading ? (
                <div className="cards">
                    {Array(3).fill(null).map((_, i) => (
                        <CardBigLoader key={i} />
                    ))}
                </div>
            ) : !cards || cards.length === 0 ? (
                <div className="cards">Nothing found for your request</div>
            ) : (
                <>
                    <div className="cards">
                        {cards.map((card: Card) => (
                            <CardBig card={card} key={card.id} />
                        ))}
                    </div>
                    <Pagination />
                </>
            )}
        </section>
    );
};

export default Gallery;
