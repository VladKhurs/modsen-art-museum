import './index.scss';

import { FC, lazy } from 'react';
import { useNavigate } from 'react-router-dom';

import { API_URLS, ROUTES } from '@/constants/paths';
import { CardBigProps } from '@/types/componentsTypes';
import { SessionStorageUtils } from '@/utils/sessionStorageUtils';

const ButtonFavorite = lazy(() => import('@/components/UI/ButtonFavorite'));
const { IMAGE_URL } = API_URLS;

const CardBig: FC<CardBigProps> = ({ card }) => {
	const { title, artist_title, image_id, is_public_domain } = card;
	const navigate = useNavigate();

	return (
		<div
			className="card-big"
			onClick={() => {
				SessionStorageUtils.setItem('detailInfo', card);
				navigate(ROUTES.DETAIL_INFO);
			}}
		>
			<img
				className="image"
				src={`${IMAGE_URL}${image_id}/full/843,/0/default.jpg`}
				alt={title}
			/>
			<div className="info">
				<div className="text">
					<p className="text-medium">{title}</p>
					<p className="text-special">
						{artist_title === null ? 'Unknown Artist' : artist_title}
					</p>
					<p className="text-small">
						{is_public_domain ? 'Public' : 'Not Public'}
					</p>
				</div>
				<ButtonFavorite card={card} />
			</div>
		</div>
	);
};

export default CardBig;
