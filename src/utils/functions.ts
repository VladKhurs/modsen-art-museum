import { Card } from "@/constants/types";

export const addUnique = (arr: Card[], newItem: Card) => {
    if (!arr.some(item => item.id === newItem.id)) {
        arr.push(newItem);
        sessionStorage.setItem('favorites', JSON.stringify(arr));
    }
};

