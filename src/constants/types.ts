export interface Card {
    id: number;
    title: string;
    artist_title: string;
    image_id: string;
    is_public_domain: boolean;
    date_display: string;
    place_of_origin: string;
    dimensions: string;
    credit_line: string;
    department_title: string;
}

export interface Sort {
	sortBy?: string;
	order?: string;
}

export interface ContextProps {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    limit: number;
    setLimit: React.Dispatch<React.SetStateAction<number>>;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    sort: Sort | null;
    setSort: React.Dispatch<React.SetStateAction<Sort | null>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    cards: Card[] | null;
    setCards: React.Dispatch<React.SetStateAction<Card[] | null>>;
	detailInfo: Card | null;
    setDetailInfo: React.Dispatch<React.SetStateAction<Card | null>>;
}

export interface FetchByPageLimitQuerySort {
    page?: number;
	limit?: number;
	query?: string;
	sort?: Sort | null
}
