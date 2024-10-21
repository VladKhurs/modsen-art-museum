import './Home.scss';
import React, { useContext, useEffect } from 'react';
import { fetchByPageLimitQuery } from '@/utils/http/fetchRequests';
import { Context } from '../../store/Context';
import SearchSection from '@/components/SearchSection/SearchSection';
import Gallery from '@/components/Gallery/Gallery';
import OtherWorks from '@/components/OtherWorks/OtherWorks';
import { ContextProps } from '@/constants/types';

const Home: React.FC = () => {
	const { query, setIsLoading, setCards, page } = useContext(
		Context
	) as ContextProps;

	useEffect(() => {
		const fetchCards = async () => {
			try {
				const cardsFetched = await fetchByPageLimitQuery({ page, query });
				if (cardsFetched) {
					setCards(cardsFetched);
					setIsLoading(false);
				}
			} catch (e) {
				console.error(e);
			}
		};
		fetchCards();
	}, [page, query, setCards, setIsLoading]);

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
