import './index.scss';
import { FC } from 'react';

const CardSmallLoader: FC = () => {
	return <div className="card-small load" data-testid="loading"></div>;
};

export default CardSmallLoader;
