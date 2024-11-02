import './index.scss';

import { FC, lazy, useState } from 'react';

import { Sort } from '@/types/componentsTypes';
import { LIMITS, PAGES } from '@/constants/numbers';
import { useFetchHome } from '@/utils/hooks';

const Gallery = lazy(() => import('@/components/Gallery'));
const OtherWorks = lazy(() => import('@/components/OtherWorks'));
const SearchSection = lazy(() => import('@/components/SearchSection'));
const ErrorMessage = lazy(() => import('@/components/UI/ErrorMessage'));

const { SMALL_LIMIT } = LIMITS;
const { DEFAULT_PAGE } = PAGES;

const HomePage: FC = () => {
	const [page, setPage] = useState<number>(DEFAULT_PAGE);
	const [limit, setLimit] = useState<number>(SMALL_LIMIT);
	const [query, setQuery] = useState<string>('');
	const [sort, setSort] = useState<Sort | null>(null);

	const { cards, isLoading, error, setIsLoading } = useFetchHome(
		page,
		limit,
		query,
		sort
	);

	return (
		<main className="home">
			<div className="container">
				<>
					{error ? (
						<ErrorMessage message={error} />
					) : (
						<>
							<SearchSection
								setQuery={setQuery}
								setSort={setSort}
								setIsLoading={setIsLoading}
							/>
							<Gallery
								page={page}
								setPage={setPage}
								limit={limit}
								setLimit={setLimit}
								isLoading={isLoading}
								setIsLoading={setIsLoading}
								cards={cards}
							/>
							<OtherWorks />
						</>
					)}
				</>
			</div>
		</main>
	);
};

export default HomePage;
