import { render, screen } from '@testing-library/react';
import { Context } from '@/store/Context';
import Gallery from './Gallery';
import { Card, ContextProps } from '@/constants/types';
import { BrowserRouter } from 'react-router-dom';

describe('Gallery', () => {
  const mockContextValue: ContextProps = {
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

  const mockCards: Card[] = [
    { 
      id: 1, 
      title: 'Art 1', 
      artist_title: 'Artist 1', 
      image_id: 'img1', 
      is_public_domain: true, 
      date_display: '2021-01-01', 
      place_of_origin: 'Place 1', 
      dimensions: '10x10', 
      credit_line: 'Credit 1', 
      department_title: 'Department 1' 
    },
    { 
      id: 2, 
      title: 'Art 2', 
      artist_title: 'Artist 2', 
      image_id: 'img2', 
      is_public_domain: true, 
      date_display: '2021-02-01', 
      place_of_origin: 'Place 2', 
      dimensions: '20x20', 
      credit_line: 'Credit 2', 
      department_title: 'Department 2' 
    },
  ];

  it('renders no cards found state correctly', () => {
    render(
      <BrowserRouter>
        <Context.Provider value={{ ...mockContextValue, isLoading: false, cards: [] }}>
          <Gallery />
        </Context.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText('Nothing found for your request')).toBeInTheDocument();
  });

  it('renders cards correctly', () => {
    render(
      <BrowserRouter>
        <Context.Provider value={{ ...mockContextValue, isLoading: false, cards: mockCards }}>
          <Gallery />
        </Context.Provider>
      </BrowserRouter>
    );

    mockCards.forEach(card => {
      expect(screen.getByText(card.title)).toBeInTheDocument();
      expect(screen.getByText(card.artist_title)).toBeInTheDocument();
    });

    expect(screen.getByText('Topics for you')).toBeInTheDocument();
    expect(screen.getByText('Our special gallery')).toBeInTheDocument();
  });
});
