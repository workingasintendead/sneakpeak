import { edgeConfigStore } from './edge-config-store';
import { edgeConfigStore as mockStore } from './__mocks__/edge-config-store';

describe('EdgeConfigStore - uniqueBrands', () => {
  beforeEach(() => {
    edgeConfigStore.configData = mockStore.configData;
  });

  it('returns a unique set of all shoe brands across categories', () => {
    const brands = edgeConfigStore.uniqueBrands;
    expect(brands.size).toBe(6);
    expect(Array.from(brands)).toEqual(
      expect.arrayContaining([
        'Nike',
        'Adidas',
        'Puma',
        'Reebok',
        'New Balance',
        'Converse',
      ])
    );
  });

  it('returns an empty set if configData is null', () => {
    edgeConfigStore.configData = null;
    const brands = edgeConfigStore.uniqueBrands;
    expect(brands.size).toBe(0);
  });

  it('returns an empty set if categories are empty', () => {
    edgeConfigStore.configData = { categories: {} };
    const brands = edgeConfigStore.uniqueBrands;
    expect(brands.size).toBe(0);
  });
});
