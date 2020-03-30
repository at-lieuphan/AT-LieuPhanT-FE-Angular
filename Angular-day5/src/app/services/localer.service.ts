import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalerService {
  constructor() { }

  saveLocalStorage(ob: object, key: string) {
    localStorage.setItem(key, JSON.stringify(ob));
  }

  getLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  saveSessionStorage(ob: object, key) {
    sessionStorage.setItem(key, JSON.stringify(ob));
  }

  getSessionStorage(key: string) {
    return JSON.parse(sessionStorage.getItem(key));
  }
}
 