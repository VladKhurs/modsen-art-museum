import './SearchSection.scss';
import React, { useContext, useState } from 'react';
import search from '@/assets/search.svg';
import { Context } from '@/store/Context';
import { ContextProps } from '@/constants/types';

const SearchSection: React.FC = () => {
    const { setQuery, setIsLoading } = useContext(Context) as ContextProps;
    const [inputValue, setInputValue] = useState<string | null>(null);

    return (
        <section className='search-section'>
            <h1 className="h1">{"Let's"} Find Some <span>Art</span> Here!</h1>
            <div className="search">
                <input 
                    type="text"
                    placeholder="Search Art, Artist, Work..."
                    onChange={({ target: { value } }) => setInputValue(value)}
                />
                <button onClick={() => {
                    setQuery(inputValue || '');
                    setIsLoading(true);
                }}>
                    <img src={search} alt="search" />
                </button>
            </div>
        </section>
    );
};

export default SearchSection;
