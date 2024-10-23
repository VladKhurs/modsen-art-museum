import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders footer component correctly', () => {
    const { getByAltText, getByText } = render(<Footer />);

    const logoImage = getByAltText('museum');
    expect(logoImage).toBeInTheDocument();

    const museumText = getByText((content, element) => {
      return content.startsWith('Museum of') && element?.tagName.toLowerCase() === 'p';
    });
    expect(museumText).toBeInTheDocument();

    const modsenImage = getByAltText('modsen');
    expect(modsenImage).toBeInTheDocument();
  });
});
