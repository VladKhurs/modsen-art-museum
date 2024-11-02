import { Dispatch, SetStateAction } from 'react';

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

export type CardState = Card[] | null;

export interface ButtonFavoriteProps {
	card: Card;
	updateFavorites?: () => void;
}

export interface CardBigProps {
	card: Card;
}

export interface CardSmallProps {
	card: Card;
	updateFavorites?: () => void;
}

export interface DropdownProps {
	title: string;
	options: { label: string; sortBy: string; order: string }[];
	setSort: Dispatch<SetStateAction<Sort | null>>;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface ErrorMessageProps {
	message: string;
}

export interface GalleryProps {
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
	limit: number;
	setLimit: Dispatch<SetStateAction<number>>;
	isLoading: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	cards: Card[] | null;
}

export interface PaginationProps {
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
	limit: number;
	setLimit: Dispatch<SetStateAction<number>>;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface SearchSectionProps {
	setQuery: Dispatch<SetStateAction<string>>;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
	setSort: Dispatch<SetStateAction<Sort | null>>;
}

export interface SearchInputProps {
	setQuery: Dispatch<SetStateAction<string>>;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface SearchInputProps {
	setQuery: Dispatch<SetStateAction<string>>;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface CustomLinkProps {
	to: string;
	icon: string;
	label: string;
}

export interface PaginateArrowsProps {
	page: number;
	setPage: (page: number) => void;
	setIsLoading: (isLoading: boolean) => void;
}

export interface PaginateByProps {
	limit: number;
	setLimit: (limit: number) => void;
	setIsLoading: (isLoading: boolean) => void;
}

export interface useFetchOtherWorksParams {
	page: number;
	limit: number;
}

export interface DropdownHandlersParams {
	setSort: (sort: Sort) => void;
	setIsLoading: (isLoading: boolean) => void;
	handleDropdownClick: () => void;
}
