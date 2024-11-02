import './index.scss';

import { FC } from 'react';

import arrowLeft from '@/assets/arrow-left.svg';
import arrowRight from '@/assets/arrow-right.svg';
import { PAGINATES } from '@/constants/numbers';
import { PaginateArrowsProps } from '@/types/componentsTypes';
import { usePageChange } from '@/utils/hooks';

const { PAGINATE_BUTTONS_AMOUNT, PAGINATE_BY } = PAGINATES;

const PaginateArrows: FC<PaginateArrowsProps> = ({
	page,
	setPage,
	setIsLoading,
}) => {
	const handleChangePage = usePageChange(page, setPage, setIsLoading);

	return (
		<div className="paginate-arrows">
			{page !== 1 && (
				<button
					className="arrow-left"
					onClick={() => handleChangePage(PAGINATE_BY, false)}
				>
					<img src={arrowLeft} alt="Previous" />
				</button>
			)}
			<button className="number number-special">{page}</button>

			{Array(PAGINATE_BUTTONS_AMOUNT)
				.fill(null)
				.map((_, i) => (
					<button
						className="number"
						onClick={() => handleChangePage(i + PAGINATE_BY)}
						key={`page-${page}-${i}`}
					>
						{i + 1 + page}
					</button>
				))}
			<button
				className="arrow-right"
				onClick={() => handleChangePage(PAGINATE_BY)}
			>
				<img src={arrowRight} alt="Next" />
			</button>
		</div>
	);
};

export default PaginateArrows;
