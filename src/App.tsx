import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import DetailInfo from '@/pages/DetailInfo/DetailInfo';
import Favorites from '@/pages/Favorites/Favorites';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Context } from './store/Context';
import { Card, Sort } from './constants/types';

const App: React.FC = () => {
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(3);
	const [query, setQuery] = useState<string>('');
	const [sort, setSort] = useState<Sort | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [cards, setCards] = useState<Card[] | null>(null);
	const [detailInfo, setDetailInfo] = useState<Card | null>(null);
	if (sessionStorage.getItem('favorites') === null) {
		sessionStorage.setItem('favorites', JSON.stringify([]));
	}

	return (
		<BrowserRouter>
			<Header />
			<Context.Provider
				value={{
					page,
					setPage,
					query,
					setQuery,
					sort, 
					setSort,
					isLoading,
					setIsLoading,
					cards,
					setCards,
					detailInfo,
					setDetailInfo,
					limit,
					setLimit
				}}
			>
				<Routes>
					<Route path="*" element={<Home />} />
					<Route path="detail-info" element={<DetailInfo />} />
					<Route path="favorites" element={<Favorites />} />
				</Routes>
			</Context.Provider>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
