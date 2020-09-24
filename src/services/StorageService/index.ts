class StorageService {

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  setObjectItem<T>(key: string, value: T): void {
    this.setItem(key, JSON.stringify(value));
  }

  getObjectItem<T>(key: string): T | null {
    const value = this.getItem(key);

    if (value) {
      return JSON.parse(value);
    }

    return null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}

const StorageServiceInstance = new StorageService();

export default StorageServiceInstance as StorageService;
