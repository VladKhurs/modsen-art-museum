import { render, screen, fireEvent } from '@testing-library/react';
import Favorites from './Favorites';
import { Card } from '@/constants/types';

jest.mock('@/components/UI/CardSmall/CardSmall', () => (props: any) => (
  <div data-testid="card-small">
    {props.card.title}
    <button onClick={props.updateFavorites}>Update</button>
  </div>
));

describe('Favorites', () => {
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

  beforeEach(() => {
    sessionStorage.clear();
    jest.clearAllMocks();
  });

  it('renders correctly with favorites', () => {
    sessionStorage.setItem('favorites', JSON.stringify([mockCard]));

    render(<Favorites />);

    expect(screen.getByText('Here Are Your')).toBeInTheDocument();
    expect(screen.getByText('Favorites')).toBeInTheDocument();
    expect(screen.getByText('Saved by you')).toBeInTheDocument();
    expect(screen.getByText('Your favorites list')).toBeInTheDocument();
    expect(screen.getByText('Art 1')).toBeInTheDocument();
  });

  it('renders correctly with no favorites', () => {
    render(<Favorites />);

    expect(screen.getByText('No Favorites Yet')).toBeInTheDocument();
  });

  it('updates favorites when button is clicked', () => {
    sessionStorage.setItem('favorites', JSON.stringify([mockCard]));

    render(<Favorites />);

    const updateButton = screen.getByText('Update');
    fireEvent.click(updateButton);

    expect(screen.getByText('Art 1')).toBeInTheDocument();
  });
});
