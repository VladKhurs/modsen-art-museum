import './index.scss';

import { FC } from 'react';

import search from '@/assets/search.svg';
import { SearchInputProps } from '@/types/componentsTypes';
import { useSearchForm } from '@/utils/useSearchForm';

const SearchInput: FC<SearchInputProps> = ({ setQuery, setIsLoading }) => {
	const { formik, handleChange } = useSearchForm(setQuery, setIsLoading);

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

export default SearchInput;
