import './index.scss';
import { lazy, FC, useEffect, useState } from 'react';
import { fetchByPageLimitQuerySort } from '@/api/fetchRequests';
import { CardState } from '@/types/componentsTypes';
import { LIMITS, PAGES } from '@/constants/numbers';
import ErrorMessage from '@/components/UI/ErrorMessage';

const CardSmall = lazy(() => import('@/components/UI/CardSmall'));
const CardSmallLoader = lazy(() => import('@/components/UI/CardSmallLoader'));

const { OTHER_WORKS_LIMIT } = LIMITS;
const { OTHER_WORKS_PAGE } = PAGES;

const OtherWorks: FC = () => {
	const [cards, setCards] = useState<CardState>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCards = async () => {
			try {
				const cardsFetched = await fetchByPageLimitQuerySort({
					page: OTHER_WORKS_PAGE,
					limit: OTHER_WORKS_LIMIT,
				});
				if (cardsFetched) {
					setCards(cardsFetched);
					setIsLoading(false);
				}
			} catch (e) {
				setError(e.message);
				console.error(e);
			}
		};
		fetchCards();
	}, []);

	return (
		<section className="other-works">
			<div className="heading">
				<p className="text-special">Here some more</p>
				<h2 className="h2">Other works for you</h2>
			</div>
			{error ? (
				<ErrorMessage message={error} />
			) : isLoading ? (
				<div className="cards">
					{Array(OTHER_WORKS_LIMIT)
						.fill(null)
						.map((_, i) => (
							<CardSmallLoader key={`other-works-loader-card-${i}`} />
						))}
				</div>
			) : (
				<div className="cards">
					{cards &&
						cards.map((card) => (
							<CardSmall card={card} key={`other-works-card-${card.id}`} />
						))}
				</div>
			)}
		</section>
	);
};

export default OtherWorks;
