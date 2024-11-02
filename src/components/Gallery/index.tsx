import './index.scss';

import { FC, lazy } from 'react';

import { Card, GalleryProps } from '@/types/componentsTypes';

const CardBig = lazy(() => import('@/components/UI/CardBig'));
const CardBigLoader = lazy(() => import('@/components/UI/CardBigLoader'));
const Pagination = lazy(() => import('@/components/Pagination'));

const Gallery: FC<GalleryProps> = ({
	page,
	setPage,
	limit,
	setLimit,
	isLoading,
	setIsLoading,
	cards,
}) => {
	return (
		<section className="gallery">
			<div className="heading">
				<p className="text-special">Topics for you</p>
				<h2 className="h2">Our special gallery</h2>
			</div>
			{isLoading ? (
				<div className="cards">
					{Array(limit)
						.fill(null)
						.map((_, i) => (
							<CardBigLoader key={`gallery-loader-card-${i}`} />
						))}
				</div>
			) : !cards || !cards.length ? (
				<div className="text-center">Nothing found for your request</div>
			) : (
				<>
					<div className="cards">
						{cards.map((card: Card) => (
							<CardBig card={card} key={`gallery-card-${card.id}`} />
						))}
					</div>
					<Pagination
						page={page}
						setPage={setPage}
						limit={limit}
						setLimit={setLimit}
						setIsLoading={setIsLoading}
					/>
				</>
			)}
		</section>
	);
};

export default Gallery;
