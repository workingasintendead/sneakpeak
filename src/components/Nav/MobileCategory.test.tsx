import { render, screen, fireEvent } from '@testing-library/react';
import MobileCategory from './MobileCategory';

describe('MobileCategory', () => {
  const title = 'Men';
  const categoryKey = 'men';
  const shoestyles = ['Basketball', 'Running'];
  const closeMock = jest.fn();

  it('renders the component with the correct title', () => {
    render(
      <MobileCategory
        title={title}
        shoestyles={shoestyles}
        categoryKey={categoryKey}
        close={closeMock}
      />
    );

    expect(screen.getByText('Men')).toBeInTheDocument();
  });

  it('generates the correct hrefs for links', () => {
    render(
      <MobileCategory
        title={title}
        shoestyles={shoestyles}
        categoryKey={categoryKey}
        close={closeMock}
      />
    );

    expect(screen.getByText('Men').closest('a')).toHaveAttribute(
      'href',
      `/men`
    );

    expect(screen.getByText('Basketball').closest('a')).toHaveAttribute(
      'href',
      `/men/styles/basketball`
    );
  });

  it('calls the close function when any link is clicked', () => {
    render(
      <MobileCategory
        title={title}
        shoestyles={shoestyles}
        categoryKey={categoryKey}
        close={closeMock}
      />
    );
    expect(closeMock).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByText(title).closest('a')!);
    expect(closeMock).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('Basketball').closest('a')!);
    fireEvent.click(screen.getByText('Running').closest('a')!);
    expect(closeMock).toHaveBeenCalledTimes(3);
  });
});
