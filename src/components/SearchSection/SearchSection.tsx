import './SearchSection.scss';
import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { z } from 'zod';
import search from '@/assets/search.svg';
import { Context } from '@/store/Context';
import { ContextProps } from '@/constants/types';

const searchSchema = z.object({
	query: z.string().min(1, { message: 'Search query cannot be empty' }),
});

const validate = (values: { query: string }) => {
	const result = searchSchema.safeParse(values);
	if (result.success) return {};

	return result.error.flatten().fieldErrors;
};

const SearchSection: React.FC = () => {
	const { query, setQuery, setIsLoading } = useContext(Context) as ContextProps;
	const [isEmpty, setIsEmpty] = useState(false);
  const [lastQuery, setLastQuery] = useState(query);
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

	return (
		<section className="search-section">
			<h1 className="h1">
				{"Let's"} Find Some <span>Art</span> Here!
			</h1>
			<form onSubmit={handleSubmit} className="search">
				<input
					type="search"
					name="query"
					placeholder={
						isEmpty
							? 'Search query cannot be empty'
							: 'Search Art, Artist, Work...'
					}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.query}
				/>
				<button type="submit">
					<img src={search} alt="search" />
				</button>
			</form>
		</section>
	);
};

export default SearchSection;
