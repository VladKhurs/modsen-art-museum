import { FC } from 'react';
import './index.scss';
import { ErrorMessageProps } from '@/types/componentsTypes';

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
	return (
		<div className="error-message">
			<p>Something went wrong: {message}</p>
		</div>
	);
};

export default ErrorMessage;
