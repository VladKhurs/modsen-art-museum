import './SearchInput.scss'
import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import search from '@/assets/search.svg';
import { ContextProps } from '@/constants/types';
import { Context } from '@/store/Context';
import { z } from 'zod';
import { useDebounce } from '@/utils/functions';

const SearchInput: React.FC = () => {
	const { query, setQuery, setIsLoading } = useContext(Context) as ContextProps;
	const [isEmpty, setIsEmpty] = useState(false);
	const [lastQuery, setLastQuery] = useState(query);
	const [inputValue, setInputValue] = useState('');

	const searchSchema = z.object({
		query: z.string().min(1, { message: 'Search query cannot be empty' }),
	});

	const validate = (values: { query: string }) => {
		const result = searchSchema.safeParse(values);
		if (result.success) return {};

		return result.error.flatten().fieldErrors;
	};

	const debouncedInputValue = useDebounce(inputValue, 750);

	useEffect(() => {
		if (debouncedInputValue && inputValue !== lastQuery) {
			setQuery(inputValue);
			setIsLoading(true);
		}
	}, [debouncedInputValue]);

	const formik = useFormik({
		initialValues: {
			query: '',
		},
		validate,
		onSubmit: (values) => {
			if (values.query !== lastQuery) {
				setQuery(values.query);
				setIsLoading(true);
				setLastQuery(values.query);
			}
		},
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		formik.handleSubmit(e);
		if (formik.touched.query && formik.errors.query) {
			setIsEmpty(true);
		} else {
			setIsEmpty(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		formik.handleChange(e);
		setInputValue(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit} className="search">
			<input
				type="search"
				name="query"
				placeholder={
					isEmpty
						? 'Search query cannot be empty'
						: 'Search Art, Artist, Work...'
				}
				onChange={handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.query}
			/>
			<button type="submit">
				<img src={search} alt="search" />
			</button>
		</form>
	);
};

export default SearchInput;

