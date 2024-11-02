import './index.scss';

import { FC } from 'react';

import { LIMITS } from '@/constants/numbers';
import { PaginateByProps } from '@/types/componentsTypes';
import { useDropdown } from '@/utils/hooks';
import { useLimitChange } from '@/utils/hooks';

const { SMALL_LIMIT, LARGE_LIMIT } = LIMITS;

const PaginateBy: FC<PaginateByProps> = ({ limit, setLimit, setIsLoading }) => {
	const { dropdownOpen, handleDropdownClick } = useDropdown();
	const handleLimitChange = useLimitChange(
		limit,
		setLimit,
		setIsLoading,
		handleDropdownClick
	);

	return (
		<div className="paginate-by">
			<button onClick={handleDropdownClick}>
				Paginate by {limit === LARGE_LIMIT ? LARGE_LIMIT : SMALL_LIMIT}
			</button>
			{dropdownOpen && (
				<div>
					<button onClick={handleLimitChange}>
						Paginate by {limit === LARGE_LIMIT ? SMALL_LIMIT : LARGE_LIMIT}
					</button>
				</div>
			)}
		</div>
	);
};

export default PaginateBy;
