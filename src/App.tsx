import { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants/paths';

const HomePage = lazy(() => import('@/pages/HomePage'));
const DetailInfoPage = lazy(() => import('@/pages/DetailInfoPage'));
const FavoritesPage = lazy(() => import('@/pages/FavoritesPage'));
const Header = lazy(() => import('@/components/Header'));
const Footer = lazy(() => import('@/components/Footer'));
const Loader = lazy(() => import('@/components/UI/Loader'));
const { DETAIL_INFO, FAVORITES, DEFAULT } = ROUTES;

const appRoutes = [
	{ path: DEFAULT, element: <HomePage /> },
	{ path: DETAIL_INFO, element: <DetailInfoPage /> },
	{ path: FAVORITES, element: <FavoritesPage /> },
];

const App: FC = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loader />}>
				<Header />
				<Routes>
					{appRoutes.map(({ path, element }) => (
						<Route key={path} path={path} element={element} />
					))}
				</Routes>
				<Footer />
			</Suspense>
		</BrowserRouter>
	);
};

export default App;
