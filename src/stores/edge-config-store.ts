import { makeAutoObservable } from 'mobx';
import { Category } from '../types/index';

interface ConfigData {
  categories: Record<string, Category>;
}

class EdgeConfigStore {
  configData: ConfigData | null = null;
  isLoading: boolean = true;
  error: boolean = false;
  uniqueBrands: Set<string> = new Set();

  constructor() {
    makeAutoObservable(this);
  }

  setConfigData(data: ConfigData) {
    this.configData = data;
    this.isLoading = false;
    this.setUniqueBrands();
  }

  setError() {
    this.error = true;
    this.isLoading = false;
  }

  setUniqueBrands() {
    const newUniqueBrands = new Set<string>();
    Object.keys(this.configData?.categories || {}).forEach((categoryKey) => {
      const category = this.configData?.categories[categoryKey];
      category?.shoebrands.forEach((brand) => {
        newUniqueBrands.add(brand);
      });
    });
    this.uniqueBrands = newUniqueBrands;
  }

  fetchConfigData = async () => {
    try {
      const res = await fetch('/api/edge-config');
      const data = await res.json();
      this.setConfigData(data);
    } catch (error) {
      console.error('Error fetching config:', error);
      this.setError();
    }
  };
}

export const edgeConfigStore = new EdgeConfigStore();
