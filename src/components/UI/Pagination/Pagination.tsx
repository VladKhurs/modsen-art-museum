import './Pagination.scss';
import React, { useContext, useState } from 'react';
import { Context } from '@/store/Context';
import arrowLeft from '@/assets/arrow-left.svg';
import arrowRight from '@/assets/arrow-right.svg';
import { ContextProps } from '@/constants/types';

const Pagination: React.FC = () => {
	const { setIsLoading, page, setPage, limit, setLimit } = useContext(Context) as ContextProps;
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handleDropdownClick = () => {
		setDropdownOpen(!dropdownOpen);
	};

	return (
		<div className="pagination">
			<div className="dropdown">
				<button onClick={handleDropdownClick}>
					Paginage by {limit === 5 ? 5 : 3}
				</button>
				{dropdownOpen && (
					<div>
						<button onClick={() => {
							setLimit(limit === 5 ? 3 : 5)
							setDropdownOpen(false);
							setIsLoading(true);
						}}>
							Paginate by {limit === 5 ? 3 : 5}
						</button>
					</div>
				)}
			</div>

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
