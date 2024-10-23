import { render, fireEvent } from '@testing-library/react';
import ButtonFavorite from './ButtonFavorite';
import { Card } from '@/constants/types';

describe('ButtonFavorite', () => {
  const mockCard: Card = {
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
  };

  const mockUpdateFavorites = jest.fn();

  beforeEach(() => {
    sessionStorage.clear();
    jest.clearAllMocks();
  });

  it('renders correctly and adds to favorites', () => {
    const { getByAltText } = render(
      <ButtonFavorite card={mockCard} updateFavorites={mockUpdateFavorites} />
    );

    const button = getByAltText('favorites').parentElement;
    expect(button).toBeInTheDocument();
    expect(button).not.toHaveClass('button--active');

    if (button) {
      fireEvent.click(button);
      expect(button).toHaveClass('button--active');
      expect(sessionStorage.getItem('favorites')).toContain(JSON.stringify(mockCard));
      expect(mockUpdateFavorites).toHaveBeenCalledTimes(1);
    }
  });

  it('removes from favorites when clicked again', () => {
    sessionStorage.setItem('favorites', JSON.stringify([mockCard]));

    const { getByAltText } = render(
      <ButtonFavorite card={mockCard} updateFavorites={mockUpdateFavorites} />
    );

    const button = getByAltText('favorites').parentElement;
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button--active');

    if (button) {
      fireEvent.click(button);
      expect(button).not.toHaveClass('button--active');
      expect(sessionStorage.getItem('favorites')).not.toContain(JSON.stringify(mockCard));
      expect(mockUpdateFavorites).toHaveBeenCalledTimes(1);
    }
  });
});
