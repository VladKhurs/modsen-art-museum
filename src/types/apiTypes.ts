import { Sort } from '@/types/componentsTypes';

export interface SearchItem {
	api_link: string;
}

export interface FetchByPageLimitQuerySort {
	page?: number;
	limit?: number;
	query?: string;
	sort?: Sort | null;
}
