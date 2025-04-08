import { render, screen } from '@testing-library/react';
import DesktopMenu from './DesktopMenu';
import '@testing-library/jest-dom';

jest.mock('../../stores/edge-config-store', () => ({
  edgeConfigStore: {
    configData: {
      categories: {
        men: { brands: ['Nike'], styles: ['Basketball'] },
        women: { brands: ['Yeezy'], styles: ['Formal'] },
        kids: { brands: ['Reebok'], styles: ['Streetwear'] },
      },
    },
  },
}));

describe('DesktopMenu', () => {
  test('displays Men, Women, and Kids categories', () => {
    render(<DesktopMenu />);

    expect(screen.getByText('Men')).toBeInTheDocument();
    expect(screen.getByText('Women')).toBeInTheDocument();
    expect(screen.getByText('Kids')).toBeInTheDocument();
  });

  test('displays all menu categories', () => {
    render(<DesktopMenu />);

    expect(screen.getByText('Nike')).toBeInTheDocument();
    expect(screen.getByText('Yeezy')).toBeInTheDocument();
    expect(screen.getByText('Reebok')).toBeInTheDocument();
  });
});
