import { useEffect, useState } from 'react';

import { Card } from '@/types/componentsTypes';

export const addUnique = (arr: Card[], newItem: Card) => {
	if (!arr.some((item) => item.id === newItem.id)) {
		arr.push(newItem);
		sessionStorage.setItem('favorites', JSON.stringify(arr));
	}
};

export function useDebounce(value: string, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return debouncedValue;
}

export const useClickOutside = (
	ref: React.RefObject<HTMLElement>,
	handler: () => void
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handler();
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [ref, handler]);
};
