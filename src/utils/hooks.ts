import { fetchByPageLimitQuerySort } from '@/api/fetchRequests';
import {
	Card,
	CardState,
	DropdownHandlersParams,
	Sort,
	useFetchOtherWorksParams,
} from '@/types/componentsTypes';
import {
	useEffect,
	useState,
	RefObject,
	useCallback,
} from 'react';
import { SessionStorageUtils } from './sessionStorageUtils';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/paths';
import { updateFavoritesInStorage } from './helpers';
import { LIMITS } from '@/constants/numbers';

export function useDebounce(value: string, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return debouncedValue;
}

export const useClickOutside = (
	ref: RefObject<HTMLElement>,
	handler: () => void
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				handler();
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [ref, handler]);
};

export function useFetchOtherWorks({ page, limit }: useFetchOtherWorksParams) {
	const [cards, setCards] = useState<CardState>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const cardsFetched = await fetchByPageLimitQuerySort({ page, limit });
				if (cardsFetched) {
					setCards(cardsFetched);
					setIsLoading(false);
				}
			} catch (e) {
				if (e instanceof Error) {
					setError(e.message);
				} else {
					setError('An unknown error occurred');
				}
				console.error(e);
			}
		}

		fetchData();
	}, [page, limit]);

	return { cards, isLoading, error };
}

export const useFavoriteStatus = (card: Card) => {
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const favorites = SessionStorageUtils.getItem('favorites') || [];
		setIsFavorite(favorites.some((item: Card) => item.id === card.id));
	}, [card]);

	return [isFavorite, setIsFavorite] as const;
};

export const useDropdown = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handleDropdownClick = () => {
		setDropdownOpen(!dropdownOpen);
	};

	return { dropdownOpen, handleDropdownClick, setDropdownOpen };
};

const { HOME } = ROUTES;

export const useDetailInfo = () => {
	const navigate = useNavigate();
	const [detailInfo, setDetailInfo] = useState<Card | null>(null);

	useEffect(() => {
		const detailInfoStorage = SessionStorageUtils.getItem('detailInfo');

		if (detailInfoStorage) {
			setDetailInfo(detailInfoStorage);
		} else {
			navigate(HOME);
		}
	}, [navigate]);

	return detailInfo;
};

export const useFavorites = () => {
	const [favorites, setFavorites] = useState<Card[]>([]);

	useEffect(() => {
		const favoritesFromStorage = SessionStorageUtils.getItem('favorites') || [];
		setFavorites(favoritesFromStorage);
	}, []);

	const updateFavorites = () => {
		const updatedFavorites = SessionStorageUtils.getItem('favorites') || [];
		setFavorites(updatedFavorites);
	};

	return { favorites, updateFavorites };
};

export const useFetchHome = (
	page: number,
	limit: number,
	query: string,
	sort: Sort | null
) => {
	const [cards, setCards] = useState<Card[] | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCards = async () => {
			try {
				const cardsFetched = await fetchByPageLimitQuerySort({
					page,
					limit,
					query,
					sort,
				});
				if (cardsFetched) {
					setCards(cardsFetched);
					setIsLoading(false);
				}
			} catch (e) {
				if (e instanceof Error) {
					setError(e.message);
				} else {
					setError('An unknown error occurred');
				}
				console.error(e);
			}
		};
		fetchCards();
	}, [page, limit, query, sort]);

	return { cards, isLoading, error, setIsLoading };
};

export const useChangeFavorite = (
	card: Card,
	isFavorite: boolean,
	setIsFavorite: (isFavorite: boolean) => void,
	updateFavorites: () => void
) => {
	return useCallback(() => {
		updateFavoritesInStorage(card, isFavorite);
		setIsFavorite(!isFavorite);
		if (updateFavorites) {
			updateFavorites();
		}
	}, [card, isFavorite, setIsFavorite, updateFavorites]);
};

export const useDropdownHandlers = ({
	setSort,
	setIsLoading,
	handleDropdownClick,
}: DropdownHandlersParams) => {
	const handleClick = useCallback(
		(sortBy: string, order: string) => {
			handleDropdownClick();
			setIsLoading(true);
			setSort({ sortBy, order });
		},
		[setSort, setIsLoading, handleDropdownClick]
	);

	return { handleClick };
};

export const usePageChange = (
	page: number,
	setPage: (page: number) => void,
	setIsLoading: (isLoading: boolean) => void
) => {
	const handleChangePage = useCallback(
		(numberChange: number, isIncrease = true) => {
			setPage(isIncrease ? page + numberChange : page - numberChange);
			setIsLoading(true);
		},
		[page, setPage, setIsLoading]
	);

	return handleChangePage;
};

const { SMALL_LIMIT, LARGE_LIMIT } = LIMITS;

export const useLimitChange = (
	limit: number,
	setLimit: (limit: number) => void,
	setIsLoading: (isLoading: boolean) => void,
	handleDropdownClick: () => void
) => {
	const handleLimitChange = useCallback(() => {
		setLimit(limit === LARGE_LIMIT ? SMALL_LIMIT : LARGE_LIMIT);
		handleDropdownClick();
		setIsLoading(true);
	}, [limit, setLimit, setIsLoading, handleDropdownClick]);

	return handleLimitChange;
};
