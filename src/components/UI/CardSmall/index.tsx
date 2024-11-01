import './index.scss';

import { FC, lazy } from 'react';
import { useNavigate } from 'react-router-dom';

import { API_URLS, ROUTES } from '@/constants/paths';
import { CardSmallProps } from '@/types/componentsTypes';

const ButtonFavorite = lazy(() => import('@/components/UI/ButtonFavorite'));
const { IMAGE_URL } = API_URLS;
const { DETAIL_INFO } = ROUTES;

const CardSmall: FC<CardSmallProps> = ({ card, updateFavorites }) => {
	const { title, artist_title, image_id, is_public_domain } = card;
	const navigate = useNavigate();

	return (
		<div
			className="card-small"
			onClick={() => {
				sessionStorage.setItem('detailInfo', JSON.stringify(card));
				navigate(DETAIL_INFO);
			}}
		>
			<div className="about">
				<img
					className="image"
					src={`${IMAGE_URL}${image_id}/full/843,/0/default.jpg`}
					alt={title}
				/>
				<div className="text">
					<p className="text-medium">{title}</p>
					<p className="text-special">
						{artist_title === null ? 'Unknown Artist' : artist_title}
					</p>
					<p className="text-small">
						{is_public_domain ? 'Public' : 'Not Public'}
					</p>
				</div>
			</div>
			<ButtonFavorite card={card} updateFavorites={updateFavorites} />
		</div>
	);
};

export default CardSmall;
