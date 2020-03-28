import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalerService {
  public arrMessageLocal = new Observable<object[]>();
  public arrMessageSession = new Observable<string[]>();
  constructor() { }

  saveLocalStorage(arr: object[]) {
    localStorage.setItem('Message', JSON.stringify(arr));
  }

  getLocalStorage() : Observable<object[]> {
    return this.arrMessageLocal = JSON.parse(localStorage.getItem('Message'));
  }

  saveSessionStorage(arr: object[]) {
    sessionStorage.setItem('Message', JSON.stringify(arr));
  }

  getSessionStorage() : Observable<object[]>{
    return this.arrMessageSession = JSON.parse(sessionStorage.getItem('Message'));
  }
}
