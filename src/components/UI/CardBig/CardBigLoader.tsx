import './CardBig.scss'
import React from 'react';

const CardBigLoader: React.FC = () => {
	return (
		<div className="card-big load" data-testid="loading">
			<div className="image"></div>
		</div>
	);
};

export default CardBigLoader;
