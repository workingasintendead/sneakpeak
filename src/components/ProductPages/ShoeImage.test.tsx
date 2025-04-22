import { render, screen, fireEvent } from '@testing-library/react';
import ShoeImage from './ShoeImage';
import { mockData } from '../../data/MockData';

const mockShoe = mockData.men[0];
const images = mockShoe.colorImages['Red'];

describe('ShoeImage', () => {
  it('renders the first image by default', () => {
    render(
      <ShoeImage images={images} name={mockShoe.name} activeColor="Red" />
    );
    const image = screen.getByRole('img') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain(images[0]);
  });

  it('renders nav buttons if more than 1 image', () => {
    render(
      <ShoeImage images={images} name={mockShoe.name} activeColor="Red" />
    );
    expect(screen.getByText('‹')).toBeInTheDocument();
    expect(screen.getByText('›')).toBeInTheDocument();
  });

  it('does not render nav buttons if only 1 image', () => {
    render(
      <ShoeImage
        images={mockShoe.colorImages['Black']}
        name={mockShoe.name}
        activeColor="Black"
      />
    );
    expect(screen.queryByText('‹')).not.toBeInTheDocument();
    expect(screen.queryByText('›')).not.toBeInTheDocument();
  });

  it('clicking next shows the next image', () => {
    render(
      <ShoeImage images={images} name={mockShoe.name} activeColor="Red" />
    );
    const image = screen.getByRole('img') as HTMLImageElement;

    expect(image.src).toContain(images[0]);

    fireEvent.click(screen.getByText('›'));

    expect(image.src).toContain(images[1]);
  });

  it('clicking prev wraps around to last image', () => {
    render(
      <ShoeImage images={images} name={mockShoe.name} activeColor="Red" />
    );
    const image = screen.getByRole('img') as HTMLImageElement;

    expect(image.src).toContain(images[0]);

    fireEvent.click(screen.getByText('‹'));

    expect(image.src).toContain(images[images.length - 1]);
  });

  it('resets to index 0 when images prop changes', () => {
    const { rerender } = render(
      <ShoeImage images={images} name={mockShoe.name} activeColor="Red" />
    );
    const redImage = screen.getByRole('img') as HTMLImageElement;
    expect(redImage.src).toContain(images[0]);

    fireEvent.click(screen.getByText('›'));

    expect(redImage.src).toContain(images[1]);

    const newImages = mockShoe.colorImages['Black'];
    rerender(
      <ShoeImage images={newImages} name={mockShoe.name} activeColor="Black" />
    );

    const blackImage = screen.getByRole('img') as HTMLImageElement;
    expect(blackImage.src).toContain(newImages[0]);
  });
});
