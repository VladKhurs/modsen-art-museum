import './Header.scss';
import React from 'react';
import logo from '@/assets/logo.svg';
import bookmark from '@/assets/bookmark-orange.svg';
import home from '@/assets/home.svg';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
	const location = useLocation();

	return (
		<header className="header">
			<div className="container">
				<div className="logo">
					<img src={logo} alt="museum" />
					<p>
						Museum of <span>Art</span>
					</p>
				</div>
				<div className="links">
					{location.pathname === '/' ? (
						<Link to={'/favorites'} className="link link-single">
							<img src={bookmark} alt="bookmark" />
							Your favorites
						</Link>
					) : (
						<>
							<Link to={'/'} className="link">
								<img src={home} alt="home" />
								Home
							</Link>

							<Link to={'/favorites'} className="link">
								<img src={bookmark} alt="bookmark" />
								Your favorites
							</Link>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
