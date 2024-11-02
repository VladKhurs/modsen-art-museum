export const SORT_OPTIONS = [
	{
		title: 'Sort by age',
		options: [
			{ label: 'Oldest first', sortBy: 'date_end', order: 'asc' },
			{ label: 'Newest first', sortBy: 'date_end', order: 'desc' },
		],
	},
	{
		title: 'Sort by source update',
		options: [
			{
				label: 'Recently updated',
				sortBy: 'source_updated_at',
				order: 'asc',
			},
			{
				label: 'Updated long ago',
				sortBy: 'source_updated_at',
				order: 'desc',
			},
		],
	},
];
