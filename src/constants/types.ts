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

export interface ContextProps {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    cards: Card[] | null;
    setCards: React.Dispatch<React.SetStateAction<Card[] | null>>;
}
