import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  title: BehaviorSubject<string>;
  user: BehaviorSubject<any>;
  tasks: BehaviorSubject<any>;
  friends: BehaviorSubject<any>;
  dialogs: BehaviorSubject<any>;

  constructor() {
    this.title = new BehaviorSubject("Default Title");
    this.user = new BehaviorSubject({
      name: "Dzmitry Kuzmitch",
      email: "kuzya19989@gmail.com",
      id: 0
    });
    this.tasks = new BehaviorSubject([
      {
        name: "Equations",
        subject: "Math",
        date_created: new Date().toDateString(),
        id: 0
      }
    ]);
    this.friends = new BehaviorSubject([
      {
        name: "Tom",
        email: "tom@gmail.com",
        id: 1
      },
      {
        name: "Matthew",
        email: "matthew@gmail.com",
        id: 2
      },
      {
        name: "MD",
        email: "md@gmail.com",
        id: 3
      }
    ]);
    this.dialogs = new BehaviorSubject([
      {
        name: "Tom",
        friend_id: 1,
        id: 0
      }
    ]);
  }

  changeTitle(message: string) {
    this.title.next(message)
  }
  updateUser(user: any) {
    this.user.next(user);
  }
  updateTasks(tasks: any) {
    this.tasks.next(tasks);
  }
  updateFriends(friends: any) {
    this.friends.next(friends);
  }
  updateDialogs(dialogs: any) {
    this.dialogs.next(dialogs);
  }
}