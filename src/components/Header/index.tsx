import './index.scss';

import { FC, lazy } from 'react';
import { useLocation } from 'react-router-dom';

import bookmark from '@/assets/bookmark-orange.svg';
import home from '@/assets/home.svg';
import logo from '@/assets/logo.svg';
import { ROUTES } from '@/constants/paths';

const BurgerMenu = lazy(() => import('@/components/UI/BurgerMenu'));
const CustomLink = lazy(() => import('@/components/UI/CustomLink'));

const { HOME, FAVORITES } = ROUTES;

const Header: FC = () => {
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
					{location.pathname === HOME ? (
						<CustomLink to={FAVORITES} icon={bookmark} label="Your favorites" />
					) : (
						<>
							<CustomLink to={HOME} icon={home} label="Home" />
							<CustomLink
								to={FAVORITES}
								icon={bookmark}
								label="Your favorites"
							/>
						</>
					)}
				</div>
				<BurgerMenu />
			</div>
		</header>
	);
};

export default Header;
