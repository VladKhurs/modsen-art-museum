import { FetchByPageLimitQuerySort, SearchItem } from '@/types/apiTypes';
import { Card } from '@/types/componentsTypes';
import { API_URLS } from '@/constants/paths';
import { LIMITS, PAGES } from '@/constants/numbers';

const { BASE_URL } = API_URLS;
const { DEFAULT_PAGE } = PAGES;
const { SMALL_LIMIT } = LIMITS;

export async function fetchByPageLimitQuerySort({
	page = DEFAULT_PAGE,
	limit = SMALL_LIMIT,
	query = '',
	sort = null,
}: FetchByPageLimitQuerySort): Promise<Card[]> {
	try {
		let url = `${BASE_URL}/artworks/search?q=${query}&query[term][is_public_domain]=true&page=${page}&limit=${limit}`;
		if (sort) {
			const { sortBy, order } = sort;
			url += `&sort[${sortBy}][order]=${order}`;
		}
		const searchResponse = await fetch(url);
		if (!searchResponse.ok) {
			throw new Error('Error fetching data: ' + searchResponse.statusText);
		}
		const searchData = await searchResponse.json();
		const detailedData: Card[] = await Promise.all(
			searchData.data.map(async (item: SearchItem) => {
				const detailResponse = await fetch(item.api_link);
				if (!detailResponse.ok) {
					throw new Error('Error fetching data: ' + detailResponse.statusText);
				}
				const detailData = await detailResponse.json();
				return simplifyData(detailData.data);
			})
		);
		return detailedData;
	} catch (error) {
		console.error('Error fetching data: ', error);
		return [];
	}
}

const simplifyData = ({
	id,
	title,
	artist_title,
	image_id,
	is_public_domain,
	date_display,
	place_of_origin,
	dimensions,
	credit_line,
	department_title,
}: Card) => ({
	id,
	title,
	artist_title,
	image_id,
	is_public_domain,
	date_display,
	place_of_origin,
	dimensions,
	credit_line,
	department_title,
});
