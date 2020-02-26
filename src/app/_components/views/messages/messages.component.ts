import { Component, OnInit, AfterViewChecked } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../../../_services/api/api.service';
import { DataService } from "../../../_services/data/data.service";

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, AfterViewChecked {

  constructor(
    private api: ApiService,
    private appData: DataService,
    private notification: MatSnackBar
  ) { }

  loading: boolean = false;

  user_sub: any;
  dialogs_sub: any;

  user: any = {};
  dialogs: any = [];
  currentDialog: any = {};

  messageInput: string = "";

  activeId: any;
  messageContainer: HTMLElement;

  openSnackBar(message: string, action: string) {
    this.notification.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this.user_sub = this.appData.user.subscribe((user) => {
      this.user = user;
    });

    this.dialogs_sub = this.appData.dialogs.subscribe((dialogs) => {
      this.dialogs = dialogs;
      if(this.dialogs.length > 0){
        this.currentDialog = this.dialogs[0]
        this.activeId = this.currentDialog.id;
      }
    });

    this.api.test("Messages").subscribe((result: any) => {
      this.openSnackBar(result.message, "Nice 👌");
      this.appData.changeTitle(result.message);
      this.loading = false;
    }, (err) => {
      this.openSnackBar(err.error.message, "Not Good 👎");
      this.loading = false;
    });
  }

  ngAfterViewChecked() {         
    this.messageContainer = document.getElementById("msgContainer");             
  }  

  openDialog(id: any): void {
    this.currentDialog = this.dialogs.find((dialog: any) => {
      return dialog.id === id
    });
    this.activeId = this.currentDialog.id;
    this.scrollToBottom()
  }

  sendMessage(): void {
    if(this.messageInput.length > 0) {
      this.currentDialog.messages.push({content: this.messageInput, isSender: true});
      this.messageInput = "";
      this.scrollToBottom()
    }
  }

  scrollToBottom(): void {
    this.messageContainer.scrollTop = this.messageContainer.scrollHeight;
  }

}
