import { Card } from 'src/constants/types';

interface SearchItem {
	api_link: string;
}

export async function fetchByPageLimitQuery({
	page = 1,
	limit = 3,
	query = '',
}: {
	page?: number;
	limit?: number;
	query?: string;
}): Promise<Card[]> {
	try {
		const searchResponse = await fetch(
			`https://api.artic.edu/api/v1/artworks/search?q=${query}&query[term][is_public_domain]=true&page=${page}&limit=${limit}`
		);
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
				return simplifyData(detailData.data)
			})
		);
		return detailedData;
	} catch (error) {
		console.error('Error fetching data: ', error);
		return [];
	}
}

const simplifyData = (data: Card) => {
    const { 
        id, 
        title, 
        artist_title, 
        image_id, 
        is_public_domain, 
        date_display, 
        place_of_origin, 
        dimensions, 
        credit_line, 
        department_title 
    } = data;

    return { 
        id, 
        title, 
        artist_title, 
        image_id, 
        is_public_domain, 
        date_display, 
        place_of_origin, 
        dimensions, 
        credit_line, 
        department_title 
    };
};

