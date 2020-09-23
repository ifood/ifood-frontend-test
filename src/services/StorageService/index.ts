export class StorageService {

  static getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  static setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  static setObjectItem<T>(key: string, value: T): void {
    this.setItem(key, JSON.stringify(value));
  }

  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
