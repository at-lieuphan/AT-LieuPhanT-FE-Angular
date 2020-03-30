import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalerService {
  constructor() { }

  saveLocalStorage(ob: object) {
    localStorage.setItem('Message', JSON.stringify(ob));
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem('Message'));
  }

  saveSessionStorage(ob: object) {
    sessionStorage.setItem('Message', JSON.stringify(ob));
  }

  getSessionStorage() {
    return JSON.parse(sessionStorage.getItem('Message'));
  }
}
