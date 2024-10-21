import { Card } from '@/constants/types';
import './DetailInfo.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonFavorite from '@/components/UI/ButtonFavorite/ButtonFavorite';

const DetailInfo: React.FC = () => {
	const navigate = useNavigate();
	const [detailInfo, setDetailInfo] = useState<Card | null>(null);

	useEffect(() => {
		const detailInfoStorage = sessionStorage.getItem('detailInfo');
		if (detailInfoStorage) {
			setDetailInfo(JSON.parse(detailInfoStorage));
		} else {
			navigate('/');
		}
	}, [navigate]);
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
	console.log('hi', detailInfo);

	return (
		<section className="detail-info">
			<div className="container">
				<div className="image-wrap">
					<img
						className="image"
						src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
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
						<div className="row">
							<p className="text-special"> Artist nacionality:</p>
							<p>{place_of_origin}</p>
						</div>
						<div className="row">
							<p className="text-special"> Dimensions Sheet:</p>
							<p>{dimensions}</p>
						</div>
						<div className="row">
							<p className="text-special"> Credit Line:</p>
							<p>{department_title}</p>
						</div>
						<div className="row">
							<p className="text-special"> Repository:</p>
							<p>{credit_line}</p>
						</div>
						<p>{is_public_domain ? 'Public' : 'Not Public'}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DetailInfo;
