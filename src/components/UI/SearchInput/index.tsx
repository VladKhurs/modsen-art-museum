import './index.scss';

import { FC, useState, useContext, useEffect, ChangeEvent } from 'react';

import search from '@/assets/search.svg';
import { Context } from '@/store/Context';
import { ContextProps } from '@/types/componentsTypes';
import { useDebounce } from '@/utils/functions';
import { useFormik } from 'formik';
import { validate, initialValues } from '@/utils/validateFormik';

const SearchForm: FC = () => {
	const { setQuery, setIsLoading } = useContext(Context) as ContextProps;
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
	}, [debouncedInputValue]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		formik.handleChange(e);
		setInputValue(e.target.value);
	};

	return (
		<form onSubmit={formik.handleSubmit} className="search">
			<input
				type="search"
				name="searchQuery"
				value={formik.values.searchQuery}
				onChange={handleChange}
				onBlur={formik.handleBlur}
				placeholder={
					formik.errors.searchQuery && formik.touched.searchQuery
						? formik.errors.searchQuery
						: 'Search Art, Artist, Work...'
				}
				className={
					formik.errors.searchQuery && formik.touched.searchQuery ? 'error' : ''
				}
			/>
			<button type="submit">
				<img src={search} alt="search" />
			</button>
		</form>
	);
};

export default SearchForm;
