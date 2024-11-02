import './index.scss';

import { FC } from 'react';

import { DropdownProps } from '@/types/componentsTypes';
import { useDropdown } from '@/utils/hooks';
import { useDropdownHandlers } from '@/utils/hooks';

const Dropdown: FC<DropdownProps> = ({
	title,
	options,
	setSort,
	setIsLoading,
}) => {
	const { dropdownOpen, handleDropdownClick } = useDropdown();
	const { handleClick } = useDropdownHandlers({
		setSort,
		setIsLoading,
		handleDropdownClick,
	});

	return (
		<div className="dropdown">
			<button onClick={handleDropdownClick}>{title}</button>
			{dropdownOpen && (
				<div>
					{options.map(({ sortBy, order, label }) => (
						<button
							key={`sort-by-${sortBy}-order-${order}`}
							onClick={() => handleClick(sortBy, order)}
						>
							{label}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
