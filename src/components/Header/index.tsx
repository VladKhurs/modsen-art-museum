import './index.scss';
import { FC, lazy } from 'react';
import logo from '@/assets/logo.svg';
import bookmark from '@/assets/bookmark-orange.svg';
import home from '@/assets/home.svg';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants/paths';

const BurgerMenu = lazy(() => import('@/components/UI/BurgerMenu'));
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
						<Link to={FAVORITES} className="link link-single">
							<img src={bookmark} alt="bookmark" />
							Your favorites
						</Link>
					) : (
						<>
							<Link to={HOME} className="link">
								<img src={home} alt="home" />
								Home
							</Link>

							<Link to={FAVORITES} className="link">
								<img src={bookmark} alt="bookmark" />
								Your favorites
							</Link>
						</>
					)}
				</div>
				<BurgerMenu />
			</div>
		</header>
	);
};

export default Header;
