import './Header.scss';
import React from 'react';
import logo from '@/assets/logo.svg';
import favorites from '@/assets/favorites-orange.svg';

const Header: React.FC = () => (
	<header className="header">
		<div className="container">
			<div className="logo">
				<img src={logo} alt="logo" />
				<p>
					Museum of <span>Art</span>
				</p>
			</div>
			<div className="favorites">
				<img src={favorites} alt="logo" />
				<p>Your favorites</p>
			</div>
		</div>
	</header>
);

export default Header;
