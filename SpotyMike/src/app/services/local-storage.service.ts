
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  constructor(){}

  private cache: {[key: string]: BehaviorSubject<any>} = {};

  setItem<T>(key: string, value: T){
    localStorage.setItem(key, JSON.stringify(value));

    if(this.cache[key]){
      return this.cache[key].next(value);
    } else {
      this.cache[key] = new BehaviorSubject<T>(value);
    }
  }

  getItem<T>(key: string): BehaviorSubject<T>{
    if(this.cache[key]){
      return this.cache[key];
    } else {
      const storedValue = localStorage.getItem(key);
      const initialValue = storedValue ? JSON.parse(storedValue) : null;
      this.cache[key] = new BehaviorSubject<T>(initialValue);
      return this.cache[key];
    }
  }

  removeItem<T>(key: string): void{
    localStorage.removeItem(key);
    if(this.cache[key]){
      return this.cache[key].next(null);
    }
  }
}
