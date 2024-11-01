import './index.scss';

import { FC, lazy } from 'react';

const SearchInput = lazy(() => import('@/components/UI/SearchInput'));
const Dropdown = lazy(() => import('@/components/UI/DropDown'));

const SearchSection: FC = () => {
	const sortOptionsAge = [
		{ label: 'Oldest first', sortBy: 'date_end', order: 'asc' },
		{ label: 'Newest first', sortBy: 'date_end', order: 'desc' },
	];

	const sortOptionsUpdate = [
		{ label: 'Recently updated', sortBy: 'source_updated_at', order: 'asc' },
		{ label: 'Updated long ago', sortBy: 'source_updated_at', order: 'desc' },
	];

	return (
		<section className="search-section">
			<h1 className="h1">
				{"Let's"} Find Some <span>Art</span> Here!
			</h1>
			<div className="column">
				<SearchInput />
				<div className="row">
					<Dropdown title="Sort by age" options={sortOptionsAge} />
					<Dropdown title="Sort by source update" options={sortOptionsUpdate} />
				</div>
			</div>
		</section>
	);
};

export default SearchSection;
