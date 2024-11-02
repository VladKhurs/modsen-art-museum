import './index.scss';

import { FC, lazy } from 'react';
import { LIMITS, PAGES } from '@/constants/numbers';
import { useFetchOtherWorks } from '@/utils/hooks';

const CardSmall = lazy(() => import('@/components/UI/CardSmall'));
const CardSmallLoader = lazy(() => import('@/components/UI/CardSmallLoader'));
const ErrorMessage = lazy(() => import('@/components/UI/ErrorMessage'));

const { OTHER_WORKS_LIMIT } = LIMITS;
const { OTHER_WORKS_PAGE } = PAGES;

const OtherWorks: FC = () => {
	const { cards, isLoading, error } = useFetchOtherWorks({
		page: OTHER_WORKS_PAGE,
		limit: OTHER_WORKS_LIMIT,
	});

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
