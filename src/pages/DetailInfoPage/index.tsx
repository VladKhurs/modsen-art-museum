import './index.scss';

import { FC, lazy } from 'react';

import { API_URLS } from '@/constants/paths';
import { useDetailInfo } from '@/utils/hooks';

const ButtonFavorite = lazy(() => import('@/components/UI/ButtonFavorite'));

const { IMAGE_URL } = API_URLS;

const DetailInfoPage: FC = () => {
	const detailInfo = useDetailInfo();

	const {
		title,
		artist_title,
		image_id,
		is_public_domain,
		date_display,
		place_of_origin,
		dimensions,
		credit_line,
		department_title,
	} = detailInfo || {};

	const detailInfoFields = [
		{ label: 'Artist nationality:', value: place_of_origin },
		{ label: 'Dimensions Sheet:', value: dimensions },
		{ label: 'Credit Line:', value: department_title },
		{ label: 'Repository:', value: credit_line },
	];

	return (
		<section className="detail-info">
			<div className="container">
				<div className="image-wrap">
					<img
						className="image"
						src={`${IMAGE_URL}${image_id}/full/843,/0/default.jpg`}
						alt=""
					/>
					{detailInfo !== null ? <ButtonFavorite card={detailInfo} /> : <></>}
				</div>

				<div className="info">
					<div className="heading">
						<p className="title">{title}</p>
						<p className="text-special">{artist_title}</p>
						<p>{date_display}</p>
					</div>
					<div className="overview">
						<p className="title">Overview</p>
						{detailInfoFields.map((field, index) => (
							<div className="row" key={index}>
								<p className="text-special">{field.label}</p>
								<p>{field.value}</p>
							</div>
						))}
						<p>{is_public_domain ? 'Public' : 'Not Public'}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DetailInfoPage;
