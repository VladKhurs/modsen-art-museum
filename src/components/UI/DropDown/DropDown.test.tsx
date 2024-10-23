import { render, fireEvent } from '@testing-library/react';
import { Context } from '@/store/Context';
import DropDown from './DropDown';

describe('DropDown', () => {
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

  const options = [
    { label: 'Oldest first', sortBy: 'date_end', order: 'asc' },
    { label: 'Newest first', sortBy: 'date_end', order: 'desc' },
    { label: 'Recently updated', sortBy: 'source_updated_at', order: 'asc' },
    { label: 'Updated long ago', sortBy: 'source_updated_at', order: 'desc' },
  ];

  it('renders the dropdown button and handles click', () => {
    const { getByText, queryByText } = render(
      <Context.Provider value={mockContextValue}>
        <DropDown title="Sort by age" options={options} />
      </Context.Provider>
    );
    
    expect(getByText('Sort by age')).toBeInTheDocument();
    fireEvent.click(getByText('Sort by age'));
    options.forEach(option => {
      expect(getByText(option.label)).toBeInTheDocument();
    });
    fireEvent.click(getByText('Oldest first'));
    options.forEach(option => {
      expect(queryByText(option.label)).not.toBeInTheDocument();
    });
    expect(mockContextValue.setIsLoading).toHaveBeenCalledWith(true);
    expect(mockContextValue.setSort).toHaveBeenCalledWith({ sortBy: 'date_end', order: 'asc' });
  });
});
