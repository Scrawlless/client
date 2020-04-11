import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../../../_services/api/api.service';
import { DataService } from '../../../_services/data/data.service';

import { FieldModel } from '../../../_models/workspace/field.model'

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  constructor(
    private api: ApiService,
    private appData: DataService,
    private notification: MatSnackBar
  ) {
    this.field = new FieldModel(window.innerWidth, window.innerHeight);
  }

  loading: boolean = false;

  field: FieldModel;

  openSnackBar(message: string, action: string) {
    this.notification.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this.field.render();
  }

  zoom(raw_scale: number): void {
    this.field.scale(raw_scale);
  }

}
