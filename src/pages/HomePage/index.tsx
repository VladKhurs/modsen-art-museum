import './index.scss';
import { FC, useContext, useEffect } from 'react';
import { fetchByPageLimitQuerySort } from '@/api/fetchRequests';
import { Context } from '@/store/Context';
import SearchSection from '@/components/SearchSection';
import Gallery from '@/components/Gallery';
import OtherWorks from '@/components/OtherWorks';
import { ContextProps } from '@/types/componentsTypes';

const HomePage: FC = () => {
	const { query, setIsLoading, setCards, page, limit, sort } = useContext(
		Context
	) as ContextProps;

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
				console.error(e);
			}
		};
		fetchCards();
	}, [page, query, limit, sort]);

	return (
		<main className="home">
			<div className="container">
				<>
					<SearchSection />
					<Gallery />
					<OtherWorks />
				</>
			</div>
		</main>
	);
};

export default HomePage;
