import './index.scss';

import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CustomLinkProps } from '@/types/componentsTypes';

const CustomLink: FC<CustomLinkProps> = ({ to, icon, label }) => {
	return (
		<Link to={to} className="link">
			<img src={icon} alt={label} className="link-img" />
			{label}
		</Link>
	);
};

export default CustomLink;
