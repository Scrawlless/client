import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../../../_services/api/api.service';
import { DataService } from '../../../_services/data/data.service';

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
    private notification: MatSnackBar
  ) { }

  loading: boolean = false;

  openSnackBar(message: string, action: string) {
    this.notification.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    //this.render();
  }

  render(): void {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var sheight = height - 40;
    var swidth = sheight * (210 / 297);

    // first we need to create a stage
    var stage = new Konva.Stage({
      container: 'container',   // id of container <div>
      width: width,
      height: height
    });

    var group = new Konva.Group({
      x: width / 2,
      y: height / 2,
      width: swidth,
      height: sheight,
      offsetX: swidth / 2,
      offsetY: sheight / 2
    });

    // then create layer
    var layer = new Konva.Layer();
    var count = (sheight / 30);

    // create our shape
    for (var i = 1; i < Math.round(sheight / count); i++) {

      var line = new Konva.Line({
        points: [1, i * count, swidth - 1, i * count],
        stroke: 'red',
        strokeWidth: 1,
        shadowColor: 'black',
        shadowBlur: 1,
        shadowOffset: { x: 1, y: 1 },
        shadowOpacity: 0.5
      });

      group.add(line);

    }

    var rect = new Konva.Rect({
      x: swidth / 2,
      y: sheight / 2,
      width: swidth,
      height: sheight,
      fill: 'transparent',
      stroke: 'black',
      strokeWidth: 1,
      offsetX: swidth / 2,
      offsetY: sheight / 2,
      shadowColor: 'black',
      shadowBlur: 1,
      shadowOffset: { x: 1, y: 1 },
      shadowOpacity: 0.5
    });

    group.add(rect);

    layer.add(group);

    // add the shape to the layer

    // add the layer to the stage
    stage.add(layer);

    // draw the image
    layer.draw();
  }

}
