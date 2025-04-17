import { render, screen, fireEvent } from '@testing-library/react';
import DesktopMenu from './DesktopMenu';

jest.mock('../../stores/edge-config-store');

describe('DesktopMenu', () => {
  it('displays Men, Women, and Kids categories', () => {
    render(<DesktopMenu />);

    expect(screen.getByText('Men')).toBeInTheDocument();
    expect(screen.getByText('Women')).toBeInTheDocument();
    expect(screen.getByText('Kids')).toBeInTheDocument();
  });

  it('displays Men categories', () => {
    render(<DesktopMenu />);

    expect(screen.queryByText('Nike')).not.toBeInTheDocument();
    expect(screen.queryByText('Adidas')).not.toBeInTheDocument();

    fireEvent.mouseOver(screen.getByText('Men'));

    expect(screen.getByText('Nike')).toBeInTheDocument();
    expect(screen.getByText('Adidas')).toBeInTheDocument();
  });

  it('displays Women categories', () => {
    render(<DesktopMenu />);

    expect(screen.queryByText('Puma')).not.toBeInTheDocument();
    expect(screen.queryByText('Reebok')).not.toBeInTheDocument();

    fireEvent.mouseOver(screen.getByText('Women'));

    expect(screen.getByText('Puma')).toBeInTheDocument();
    expect(screen.getByText('Reebok')).toBeInTheDocument();
  });

  it('displays Kids categories', () => {
    render(<DesktopMenu />);

    expect(screen.queryByText('New Balance')).not.toBeInTheDocument();
    expect(screen.queryByText('Converse')).not.toBeInTheDocument();

    fireEvent.mouseOver(screen.getByText('Kids'));

    expect(screen.getByText('New Balance')).toBeInTheDocument();
    expect(screen.getByText('Converse')).toBeInTheDocument();
  });
});
