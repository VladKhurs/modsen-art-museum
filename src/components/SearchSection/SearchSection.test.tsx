import { render, screen } from '@testing-library/react';
import SearchSection from './SearchSection';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '@/store/Context';

describe('SearchSection', () => {
  const mockContextValue = {
    page: 1,
    setPage: jest.fn(),
    limit: 3,
    setLimit: jest.fn(),
    query: '',
    setQuery: jest.fn(),
    sort: null,
    setSort: jest.fn(),
    isLoading: true,
    setIsLoading: jest.fn(),
    cards: null,
    setCards: jest.fn(),
    detailInfo: null,
    setDetailInfo: jest.fn()
  };

  it('renders SearchSection component correctly', () => {
    render(
      <BrowserRouter>
        <Context.Provider value={mockContextValue}>
          <SearchSection />
        </Context.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText((content, element) => {
      return content.startsWith("Let's") && element?.tagName.toLowerCase() === 'h1';
    })).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Search Art, Artist, Work...')).toBeInTheDocument();

    expect(screen.getByText('Sort by age')).toBeInTheDocument();
    expect(screen.getByText('Sort by source update')).toBeInTheDocument();
  });
});