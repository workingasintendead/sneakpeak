import { makeAutoObservable } from 'mobx';

export interface ConfigData {
  categories: Record<string, Category>;
}

export interface Category {
  title: string;
  brands: string[];
  styles: string[];
}

class EdgeConfigStore {
  configData: ConfigData | null = null;
  isLoading: boolean = true;
  error: boolean = false;

  constructor() {
    makeAutoObservable(this);
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
      const data = await res.json();
      this.setConfigData(data);
    } catch (error) {
      console.error('Error fetching config:', error);
      this.setError();
    }
  };
}

export const edgeConfigStore = new EdgeConfigStore();
