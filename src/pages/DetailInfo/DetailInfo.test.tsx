import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DetailInfo from './DetailInfo';
import { Card } from '@/constants/types';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('DetailInfo', () => {
  const mockDetailInfo: Card = {
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

  it('renders correctly when detail info is available', async () => {
    sessionStorage.setItem('detailInfo', JSON.stringify(mockDetailInfo));

    await act(async () => {
      render(
        <BrowserRouter>
          <DetailInfo />
        </BrowserRouter>
      );
    });

    expect(screen.getByText('Art 1')).toBeInTheDocument();
    expect(screen.getByText('Artist 1')).toBeInTheDocument();
    expect(screen.getByText('2021-01-01')).toBeInTheDocument();
    expect(screen.getByText('Place 1')).toBeInTheDocument();
    expect(screen.getByText('10x10')).toBeInTheDocument();
    expect(screen.getByText('Credit 1')).toBeInTheDocument();
    expect(screen.getByText('Department 1')).toBeInTheDocument();
    expect(screen.getByText('Public')).toBeInTheDocument();
  });

  it('navigates to home when detail info is not available', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <DetailInfo />
        </BrowserRouter>
      );
    });

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
