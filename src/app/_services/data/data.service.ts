import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  title: BehaviorSubject<string>;

  constructor() {
    this.title = new BehaviorSubject("Default Title");
  }

  changeMessage(message: string) {
    console.log(message);
    this.title.next(message)
  }
}