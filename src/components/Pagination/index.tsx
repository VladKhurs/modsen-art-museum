import './index.scss';

import { FC } from 'react';

import { PaginationProps } from '@/types/componentsTypes';

import PaginateBy from '@/components/UI/PaginateBy';
import PaginateArrows from '@/components/UI/PaginateArrows';

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
