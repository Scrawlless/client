import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../../../_services/api/api.service';
import { DataService } from '../../../_services/data/data.service';
import { CanvasService } from '../../../_services/canvas/canvas.service';

import { FieldModel } from '../../../_models/workspace/field.model'

import * as Konva from 'konva/konva';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  constructor(
    private api: ApiService,
    private appData: DataService,
    private shapes: CanvasService,
    private notification: MatSnackBar
  ) { }

  loading: boolean = false;

  group: any;
  stage: any;

  openSnackBar(message: string, action: string) {
    this.notification.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this.render();
  }

  zoom(scale: number, event: any = null): void {
    scale = this.group.scaleX() + scale * this.group.scaleX();
    if (scale <= 7 && scale >= 0.5) {
      this.group.scaleX(scale);
      this.group.scaleY(scale);
      this.stage.batchDraw();
    }
  }

  render(): void {
    var field = new FieldModel(window.innerWidth, window.innerHeight);
    field.render();
  }

}
