import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  constructor() {}

  get(key: string): any {
    if (localStorage.getItem(key)) {
      try {
        return localStorage.getItem(key) || '';
      } catch {
        return '';
      }
    } else {
      return '';
    }
  }

  set(key: string, value: string): void {
    localStorage.setItem(key, value.toString());
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  purge(): void {
    localStorage.clear();
  }
}
