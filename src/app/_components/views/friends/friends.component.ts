import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../../../_services/api/api.service';
import { DataService } from "../../../_services/data/data.service";

@Component({
  selector: 'friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(
    private api: ApiService,
    private appData: DataService,
    private notification: MatSnackBar
  ) { }

  loading: boolean = false;
  showSearchBar: boolean = false;
  
  searchText: string;

  friends_sub: any;
  teachers_sub: any;
  users_sub: any;

  friends: any = [];
  teachers: any = [];
  users: any = [];

  results: any = [];

  openSnackBar(message: string, action: string) {
    this.notification.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this.friends_sub = this.appData.friends.subscribe((friends) => {
      this.friends = friends;
    });

    this.teachers_sub = this.appData.teachers.subscribe((teachers) => {
      this.teachers = teachers;
    });

    this.users_sub = this.appData.users.subscribe((users) => {
      this.users = users;
    });

    this.showList('friends');
    this.api.test("Friends").subscribe((result: any) => {
      this.openSnackBar(result.message, "Nice 👌");
      this.appData.changeTitle(result.message);
      this.loading = false;
    }, (err) => {
      this.openSnackBar(err.error.message, "Not Good 👎");
      this.loading = false;
    });
  }

  search(name: string): void {
    this.results = this.users.filter((user: any)=> user.name.toLowerCase().includes(name.toLowerCase()));
  }

  showList(selection: string): void {
    if (selection === 'friends') {
      this.showSearchBar = false;
      this.results = this.friends;
    } else if (selection === 'teachers') {
      this.showSearchBar = false;
      this.results = this.teachers;
    } else if (selection === 'search') {
      this.showSearchBar = true;
      this.results = this.users;
    }
  }

}
