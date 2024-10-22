import { Context } from '@/store/Context';
import './DropDown.scss'
import React, { useContext, useState } from 'react';
import { ContextProps } from '@/constants/types';

interface DropdownProps {
    title: string;
    options: { label: string; sortBy: string; order: string; }[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, options }) => {
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
                    {options.map(option => (
                        <button
                            key={option.sortBy + option.order}
                            onClick={() => handleClick(option.sortBy, option.order)}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;