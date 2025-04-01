'use client';

import { useEffect } from 'react';
import { edgeConfigStore } from '../stores/edge-config-store';

const ConfigFetch = () => {
  useEffect(() => {
    edgeConfigStore.fetchConfigData();
  }, []);

  return null;
};

export default ConfigFetch;
