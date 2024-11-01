import './index.scss';
import { FC, useContext, useEffect, useState } from 'react';
import { fetchByPageLimitQuerySort } from '@/api/fetchRequests';
import { Context } from '@/store/Context';
import SearchSection from '@/components/SearchSection';
import Gallery from '@/components/Gallery';
import OtherWorks from '@/components/OtherWorks';
import ErrorMessage from '@/components/UI/ErrorMessage';
import { ContextProps } from '@/types/componentsTypes';

const HomePage: FC = () => {
	const { query, setIsLoading, setCards, page, limit, sort } = useContext(
		Context
	) as ContextProps;
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCards = async () => {
			try {
				const cardsFetched = await fetchByPageLimitQuerySort({
					page,
					limit,
					query,
					sort,
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
	}, [page, query, limit, sort]);

	return (
		<main className="home">
			<div className="container">
				<>
					{error ? (
						<ErrorMessage message={error} />
					) : (
						<>
							<SearchSection />
							<Gallery />
							<OtherWorks />
						</>
					)}
				</>
			</div>
		</main>
	);
};

export default HomePage;
