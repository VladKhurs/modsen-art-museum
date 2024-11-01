import { Context } from '@/store/Context';
import './index.scss';
import { FC, useContext, useState } from 'react';
import { DropdownProps, ContextProps } from '@/types/componentsTypes';

const Dropdown: FC<DropdownProps> = ({ title, options }) => {
	const { setSort, setIsLoading } = useContext(Context) as ContextProps;
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handleDropdownClick = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const handleClick = (sortBy: string, order: string) => {
		handleDropdownClick();
		setIsLoading(true);
		setSort({ sortBy, order });
	};

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
