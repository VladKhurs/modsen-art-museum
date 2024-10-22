import './OtherWorks.scss';
import React, { useEffect, useState } from 'react';
import { fetchByPageLimitQuerySort } from '@/utils/http/fetchRequests';
import CardSmall from '@/components/UI/CardSmall/CardSmall';
import CardSmallLoader from '@/components/UI/CardSmall/CardSmallLoader';
import { Card } from '@/constants/types';

const OtherWorks: React.FC = () => {
    const [cards, setCards] = useState<Card[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const cardsFetched = await fetchByPageLimitQuerySort({ page: 20, limit: 9 });
                if (cardsFetched) {
                    setCards(cardsFetched);
                    setIsLoading(false);
                }
            } catch (e) {
                console.error(e);
            }
        };
        fetchCards();
    }, []);

    return (
        <section className='other-works'>
            <div className="heading">
                <p className="text-special">Here some more</p>
                <h2 className="h2">Other works for you</h2>
            </div>
            {isLoading ? (
                <div className="cards">
                    {Array(9).fill(null).map((_, i) => (
                        <CardSmallLoader key={i} />
                    ))}
                </div>
            ) : (
                <div className="cards">
                    {cards && cards.map((card) => (
                        <CardSmall card={card} key={card.id} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default OtherWorks;
