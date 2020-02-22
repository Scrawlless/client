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
  teachers: BehaviorSubject<any>;
  users: BehaviorSubject<any>;
  dialogs: BehaviorSubject<any>;
  mobile: BehaviorSubject<boolean>;

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
        isStudent: true,
        isAdded: true,
        status: 0,
        id: 1
      },
      {
        name: "Matthew",
        email: "matthew@gmail.com",
        isStudent: true,
        isAdded: true,
        status: 0,
        id: 2
      },
      {
        name: "MD",
        email: "md@gmail.com",
        isStudent: true,
        isAdded: true,
        status: 0,
        id: 3
      },
    ]);
    this.teachers = new BehaviorSubject([
      {
        name: "Professor Steven",
        email: "steven@gmail.com",
        isStudent: false,
        isAdded: true,
        status: 1,
        id: 0
      }
    ]);
    this.users = new BehaviorSubject([
      {
        name: "Professor Steven",
        email: "steven@gmail.com",
        isStudent: false,
        isAdded: true,
        status: 1,
        id: 0
      },
      {
        name: "Tom",
        email: "tom@gmail.com",
        isStudent: true,
        isAdded: true,
        status: 0,
        id: 1
      },
      {
        name: "Matthew",
        email: "matthew@gmail.com",
        isStudent: true,
        isAdded: true,
        status: 0,
        id: 2
      },
      {
        name: "MD",
        email: "md@gmail.com",
        isStudent: true,
        isAdded: true,
        status: 0,
        id: 3
      },
      {
        name: "John",
        email: "john@gmail.com",
        isStudent: true,
        isAdded: false,
        status: 0,
        id: 4
      }
    ]);
    this.dialogs = new BehaviorSubject([
      {
        name: "Tom",
        friend_id: 1,
        id: 0
      },
      {
        name: "MD",
        friend_id: 3,
        id: 1
      }
    ]);

    this.mobile = new BehaviorSubject(undefined);
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
  updateTeachers(teachers: any) {
    this.teachers.next(teachers);
  }
  updateDialogs(dialogs: any) {
    this.dialogs.next(dialogs);
  }
  updateMobile(mobile: boolean) {
    this.mobile.next(mobile);
  }
}