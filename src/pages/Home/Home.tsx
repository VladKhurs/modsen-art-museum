import './Home.scss';
import React, { useContext, useEffect } from 'react';
import { fetchByPageLimitQuerySort } from '@/utils/http/fetchRequests';
import { Context } from '../../store/Context';
import SearchSection from '@/components/SearchSection/SearchSection';
import Gallery from '@/components/Gallery/Gallery';
import OtherWorks from '@/components/OtherWorks/OtherWorks';
import { ContextProps } from '@/constants/types';

const Home: React.FC = () => {
	const { query, setIsLoading, setCards, page, limit, sort } = useContext(
		Context
	) as ContextProps;

	useEffect(() => {
		const fetchCards = async () => {
			try {
				const cardsFetched = await fetchByPageLimitQuerySort({ page, limit, query, sort });
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

export default Home;
