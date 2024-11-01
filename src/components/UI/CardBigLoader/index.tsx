import './index.scss';
import { FC } from 'react';

const CardBigLoader: FC = () => {
	return (
		<div className="card-big load" data-testid="loading">
			<div className="image"></div>
		</div>
	);
};

export default CardBigLoader;
