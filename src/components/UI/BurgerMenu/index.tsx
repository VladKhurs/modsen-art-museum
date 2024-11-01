import './index.scss';

import { FC, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import bookmark from '@/assets/bookmark-orange.svg';
import burger from '@/assets/burger.svg';
import cross from '@/assets/cross.svg';
import home from '@/assets/home.svg';
import { ROUTES } from '@/constants/paths';
import { useClickOutside } from '@/utils/functions';

const { HOME, FAVORITES } = ROUTES;

const BurgerMenu: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	useClickOutside(menuRef, () => setIsOpen(false));

	return (
		<div className="burger-menu" ref={menuRef}>
			<button onClick={() => setIsOpen(!isOpen)}>
				<img
					src={isOpen ? cross : burger}
					alt=""
					className={isOpen ? 'img-cross' : 'img-burger'}
				/>
			</button>
			{isOpen && (
				<nav>
					<Link to={HOME} className="link">
						<img src={home} alt="home" className="link-img" /> Home
					</Link>
					<Link to={FAVORITES} className="link">
						<img src={bookmark} alt="bookmark" className="link-img" /> Your
						favorites
					</Link>
				</nav>
			)}
		</div>
	);
};

export default BurgerMenu;
