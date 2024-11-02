import './index.scss';

import { FC, useRef, useState } from 'react';

import bookmark from '@/assets/bookmark-orange.svg';
import burger from '@/assets/burger.svg';
import cross from '@/assets/cross.svg';
import home from '@/assets/home.svg';
import { ROUTES } from '@/constants/paths';
import { useClickOutside } from '@/utils/hooks';

import CustomLink from '../CustomLink';

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
					<CustomLink to={HOME} icon={home} label="Home" />
					<CustomLink to={FAVORITES} icon={bookmark} label="Your favorites" />
				</nav>
			)}
		</div>
	);
};

export default BurgerMenu;
