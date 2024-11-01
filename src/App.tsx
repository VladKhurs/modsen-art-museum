import React, { useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Context } from './store/Context';
import { Card, Sort } from '@/types/componentsTypes';
import { ROUTES } from './constants/paths';

const HomePage = React.lazy(() => import('@/pages/HomePage'));
const DetailInfoPage = React.lazy(() => import('@/pages/DetailInfoPage'));
const FavoritesPage = React.lazy(() => import('@/pages/FavoritesPage'));
const Header = React.lazy(() => import('@/components/Header'));
const Footer = React.lazy(() => import('@/components/Footer'));
const Loader = React.lazy(() => import('@/components/UI/Loader'));

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
			<Suspense fallback={<Loader />}>
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
						setLimit,
					}}
				>
					<Routes>
						<Route path="*" element={<HomePage />} />
						<Route path={ROUTES.DETAIL_INFO} element={<DetailInfoPage />} />
						<Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />
					</Routes>
				</Context.Provider>
				<Footer />
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
