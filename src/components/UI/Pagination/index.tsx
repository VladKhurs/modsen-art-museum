import './index.scss';
import { FC, useContext, useState } from 'react';
import { Context } from '@/store/Context';
import arrowLeft from '@/assets/arrow-left.svg';
import arrowRight from '@/assets/arrow-right.svg';
import { ContextProps } from '@/types/componentsTypes';
import { LIMITS, PAGINATES } from '@/constants/numbers';

const { SMALL_LIMIT, LARGE_LIMIT } = LIMITS;
const { PAGINATE_BUTTONS_AMOUNT, PAGINATE_BY } = PAGINATES;

const Pagination: FC = () => {
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
					Paginate by {limit === LARGE_LIMIT ? LARGE_LIMIT : SMALL_LIMIT}
				</button>
				{dropdownOpen && (
					<div>
						<button
							onClick={() => {
								setLimit(limit === LARGE_LIMIT ? SMALL_LIMIT : LARGE_LIMIT);
								setDropdownOpen(false);
								setIsLoading(true);
							}}
						>
							Paginate by {limit === LARGE_LIMIT ? SMALL_LIMIT : LARGE_LIMIT}
						</button>
					</div>
				)}
			</div>

			<div className="paginate">
				{page !== 1 ? (
					<button
						className="arrow-left"
						onClick={() => {
							handleChangePage(PAGINATE_BY, false);
						}}
					>
						<img src={arrowLeft} alt="" />
					</button>
				) : (
					<></>
				)}
				<button className="number number-special">{page}</button>

				{Array(PAGINATE_BUTTONS_AMOUNT)
					.fill(null)
					.map((_, i) => (
						<button
							className="number"
							onClick={() => {
								handleChangePage(i + PAGINATE_BY);
							}}
							key={`page-${page}-${i}`}
						>
							{i + 1 + page}
						</button>
					))}
				<button
					className="arrow-right"
					onClick={() => {
						handleChangePage(PAGINATE_BY);
					}}
				>
					<img src={arrowRight} alt="" />
				</button>
			</div>
		</div>
	);
};

export default Pagination;
