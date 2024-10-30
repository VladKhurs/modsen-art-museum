import './Pagination.scss';
import React, { useContext, useState } from 'react';
import { Context } from '@/store/Context';
import arrowLeft from '@/assets/arrow-left.svg';
import arrowRight from '@/assets/arrow-right.svg';
import { ContextProps } from '@/constants/types';

const Pagination: React.FC = () => {
	const { setIsLoading, page, setPage, limit, setLimit } = useContext(
		Context
	) as ContextProps;
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handleDropdownClick = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const handleChangePage = (numberChange: number, isIncrease = true) => {
		setPage(isIncrease ? page + numberChange : page - numberChange);
		setIsLoading(true);
	};

	return (
		<div className="pagination">
			<div className="dropdown">
				<button onClick={handleDropdownClick}>
					Paginate by {limit === 5 ? 5 : 3}
				</button>
				{dropdownOpen && (
					<div>
						<button
							onClick={() => {
								setLimit(limit === 5 ? 3 : 5);
								setDropdownOpen(false);
								setIsLoading(true);
							}}
						>
							Paginate by {limit === 5 ? 3 : 5}
						</button>
					</div>
				)}
			</div>

			<div className="paginate">
				{page !== 1 ? (
					<button
						className="arrow-left"
						onClick={() => {
							handleChangePage(1, false);
						}}
					>
						<img src={arrowLeft} alt="" />
					</button>
				) : (
					<></>
				)}
				<button className="number number-special">{page}</button>

				{Array(3)
					.fill(null)
					.map((_, i) => (
						<button
							className="number"
							onClick={() => {
								handleChangePage(i + 1);
							}}
							key={`page-${page}-${i}`}
						>
							{i + 1 + page}
						</button>
					))}
				<button
					className="arrow-right"
					onClick={() => {
						handleChangePage(1);
					}}
				>
					<img src={arrowRight} alt="" />
				</button>
			</div>
		</div>
	);
};

export default Pagination;
