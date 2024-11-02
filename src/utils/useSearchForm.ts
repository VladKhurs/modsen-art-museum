import { useFormik } from 'formik';
import { ChangeEvent, useEffect, useState } from 'react';
import { z } from 'zod';

import { QUERIES } from '@/constants/numbers';

import { useDebounce } from './hooks';

const { MIN_QUERY } = QUERIES;

const searchSchema = z.object({
	searchQuery: z
		.string()
		.min(MIN_QUERY, { message: 'Search query cannot be empty' }),
});

const initialValues = {
	searchQuery: '',
};

const validate = (values: { searchQuery: string }) => {
	const result = searchSchema.safeParse(values);
	if (result.success) return {};

	return result.error.flatten().fieldErrors;
};

export const useSearchForm = (
	setQuery: (query: string) => void,
	setIsLoading: (isLoading: boolean) => void
) => {
	const [inputValue, setInputValue] = useState<string>('');
	const debouncedInputValue = useDebounce(inputValue, 750);

	const formik = useFormik({
		initialValues,
		validate,
		onSubmit: (values) => {
			setInputValue(values.searchQuery);
		},
	});

	useEffect(() => {
		setQuery(debouncedInputValue);
		setIsLoading(true);
	}, [debouncedInputValue, setQuery, setIsLoading]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		formik.handleChange(e);
		setInputValue(e.target.value);
	};

	return { formik, handleChange };
};
