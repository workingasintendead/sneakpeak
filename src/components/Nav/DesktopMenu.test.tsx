import { render, screen } from '@testing-library/react';
import DesktopMenu from './DesktopMenu';
import '@testing-library/jest-dom';

jest.mock('../../stores/edge-config-store');

describe('DesktopMenu', () => {
  it('displays Men, Women, and Kids categories', () => {
    render(<DesktopMenu />);

    expect(screen.getByText('Men')).toBeInTheDocument();
    expect(screen.getByText('Women')).toBeInTheDocument();
    expect(screen.getByText('Kids')).toBeInTheDocument();
  });

  it('displays all menu categories', () => {
    render(<DesktopMenu />);

    expect(screen.getByText('Nike')).toBeInTheDocument();
    expect(screen.getByText('Adidas')).toBeInTheDocument();
    expect(screen.getByText('Puma')).toBeInTheDocument();
    expect(screen.getByText('Reebok')).toBeInTheDocument();
    expect(screen.getByText('New Balance')).toBeInTheDocument();
    expect(screen.getByText('Converse')).toBeInTheDocument();
  });
});
