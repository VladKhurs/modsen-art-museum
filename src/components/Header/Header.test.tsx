import { render } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  it('renders header component correctly', () => {
    const { getByAltText, getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const logoImage = getByAltText('museum');
    expect(logoImage).toBeInTheDocument();

    const museumText = getByText((content, element) => {
      return content.startsWith('Museum of') && element?.tagName.toLowerCase() === 'p';
    });
    expect(museumText).toBeInTheDocument();

    const favoritesLink = getByText('Your favorites');
    expect(favoritesLink).toBeInTheDocument();
  });

  it('renders home link when not on home page', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/favorites']}>
        <Header />
      </MemoryRouter>
    );

    const homeLink = getByText('Home');
    expect(homeLink).toBeInTheDocument();

    const favoritesLink = getByText('Your favorites');
    expect(favoritesLink).toBeInTheDocument();
  });

  it('does not render home link when on home page', () => {
    const { queryByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    );

    const homeLink = queryByText('Home');
    expect(homeLink).not.toBeInTheDocument();
  });
});
