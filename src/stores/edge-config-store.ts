import { makeAutoObservable } from 'mobx';
import { Category } from '../types/index';

interface ConfigData {
  categories: Record<string, Category>;
}

class EdgeConfigStore {
  configData: ConfigData | null;
  isLoading: boolean;
  error: boolean;

  constructor() {
    this.configData = null;
    this.isLoading = true;
    this.error = false;
    makeAutoObservable(this);
  }

  get uniqueBrands() {
    const brands = new Set<string>();
    Object.values(this.configData?.categories || {}).forEach((category) => {
      category.shoebrands.forEach((brand) => brands.add(brand));
    });
    return brands;
  }

  setConfigData(data: ConfigData) {
    this.configData = data;
    this.isLoading = false;
  }

  setError() {
    this.error = true;
    this.isLoading = false;
  }

  fetchConfigData = async () => {
    try {
      const res = await fetch('/api/edge-config');
      const data = (await res.json()) as ConfigData;
      this.setConfigData(data);
    } catch (error) {
      console.error('Error fetching config:', error);
      this.setError();
    }
  };
}

export const edgeConfigStore = new EdgeConfigStore();
