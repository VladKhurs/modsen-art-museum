import './index.scss';

import { FC, lazy } from 'react';

import { SORT_OPTIONS } from '@/constants/sortOptions';
import { SearchSectionProps } from '@/types/componentsTypes';

const SearchInput = lazy(() => import('@/components/UI/SearchInput'));
const Dropdown = lazy(() => import('@/components/UI/DropDown'));

const SearchSection: FC<SearchSectionProps> = ({
	setQuery,
	setSort,
	setIsLoading,
}) => {
	return (
		<section className="search-section">
			<h1 className="h1">
				{"Let's"} Find Some <span>Art</span> Here!
			</h1>
			<div className="column">
				<SearchInput setQuery={setQuery} setIsLoading={setIsLoading} />
				<div className="row">
					{SORT_OPTIONS.map((dropdown) => (
						<Dropdown
							key={dropdown.title}
							title={dropdown.title}
							options={dropdown.options}
							setSort={setSort}
							setIsLoading={setIsLoading}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default SearchSection;
