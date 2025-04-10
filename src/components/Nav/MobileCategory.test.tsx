import { render, screen } from '@testing-library/react';
import MobileCategory from './MobileCategory';
import '@testing-library/jest-dom';

describe('MobileCategory', () => {
  const title = 'Men';
  const categoryKey = 'men';
  const shoestyles = ['Basketball', 'Running'];

  it('renders the component with the correct title', () => {
    render(
      <MobileCategory
        title={title}
        shoestyles={shoestyles}
        categoryKey={categoryKey}
      />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('generates the correct hrefs for links', () => {
    render(
      <MobileCategory
        title={title}
        shoestyles={shoestyles}
        categoryKey={categoryKey}
      />
    );

    expect(screen.getByText(title).closest('a')).toHaveAttribute(
      'href',
      `/${categoryKey}`
    );

    shoestyles.forEach((style) => {
      expect(screen.getByText(style).closest('a')).toHaveAttribute(
        'href',
        `/${categoryKey}/styles/${style.toLowerCase()}`
      );
    });
  });
});
