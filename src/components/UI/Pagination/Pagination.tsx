import './Pagination.scss';
import React, { useContext } from 'react';
import { Context } from '@/store/Context';
import arrowLeft from '@/assets/arrow-left.svg';
import arrowRight from '@/assets/arrow-right.svg';
import { ContextProps } from '@/constants/types';

const Pagination: React.FC = () => {
    const { setIsLoading, page, setPage  } = useContext(Context) as ContextProps;
	return (
		<div className="pagination">
			{page !== 1 ? (
				<button
					className="arrow-left"
					onClick={() => {
						setPage(page - 1);
						setIsLoading(true);
					}}
				>
					<img src={arrowLeft} alt="" />
				</button>
			) : (
				<></>
			)}
			<button className="number number-special">{0 + page}</button>
			<button className="number">{1 + page}</button>
			<button className="number">{2 + page}</button>
			<button className="number">{3 + page}</button>
			<button
				className="arrow-right"
				onClick={() => {
					setPage(page + 1);
					setIsLoading(true);
				}}
			>
				<img src={arrowRight} alt="" />
			</button>
		</div>
	);
};

export default Pagination;