import { Card } from '@/constants/types';
import { useEffect, useState } from 'react';

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
