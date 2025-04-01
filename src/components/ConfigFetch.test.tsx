import { render } from '@testing-library/react';
import ConfigFetch from '../components/ConfigFetch';
import { edgeConfigStore } from '../stores/edge-config-store';

jest.mock('../stores/edge-config-store', () => ({
  edgeConfigStore: {
    fetchConfigData: jest.fn(),
  },
}));

describe('ConfigFetch', () => {
  it('calls fetchConfigData', () => {
    render(<ConfigFetch />);

    expect(edgeConfigStore.fetchConfigData).toHaveBeenCalledTimes(1);
  });
});
