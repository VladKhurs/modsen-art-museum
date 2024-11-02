import './index.scss';

import { FC } from 'react';

import PaginateArrows from '@/components/UI/PaginateArrows';
import PaginateBy from '@/components/UI/PaginateBy';
import { PaginationProps } from '@/types/componentsTypes';

const Pagination: FC<PaginationProps> = ({
	page,
	setPage,
	limit,
	setLimit,
	setIsLoading,
}) => {
	return (
		<div className="pagination">
			<PaginateBy
				limit={limit}
				setLimit={setLimit}
				setIsLoading={setIsLoading}
			/>
			<PaginateArrows
				page={page}
				setPage={setPage}
				setIsLoading={setIsLoading}
			/>
		</div>
	);
};

export default Pagination;
