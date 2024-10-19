import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import DetailInfo from '@/pages/DetailInfo/DetailInfo';
import Favorites from '@/pages/Favorites/Favorites';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const App: React.FC = () => (
	<BrowserRouter>
		<Header />
		<Routes>
			<Route path="*" element={<Home />} />
			<Route path="detail-info" element={<DetailInfo />} />
			<Route path="favorites" element={<Favorites />} />
		</Routes>
		<Footer />
	</BrowserRouter>
);
export default App;
