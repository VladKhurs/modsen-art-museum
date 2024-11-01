import './index.scss';

import { FC } from 'react';

const Loader: FC = () => {
	return (
		<div className="loader" data-testid="loading">
			<span className="spinner"></span>
		</div>
	);
};

export default Loader;
