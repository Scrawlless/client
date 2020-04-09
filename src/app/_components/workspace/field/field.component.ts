import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../../../_services/api/api.service';
import { DataService } from '../../../_services/data/data.service';
import { CanvasService } from '../../../_services/canvas/canvas.service';

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

  openSnackBar(message: string, action: string) {
    this.notification.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this.render();
  }

  render(): void {

    function getDistance(p1, p2) {
      return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }

    Konva.hitOnDragEnabled = true;

    var width = window.innerWidth;
    var height = window.innerHeight;
    var sheight = height;
    var swidth = sheight * (210 / 297);

    var lastDist = 0;

    var stage = this.shapes.stage(width, height);

    var group = new Konva.Group({
      x: width / 2,
      y: height / 2,
      width: swidth,
      height: sheight,
      offsetX: swidth / 2,
      offsetY: sheight / 2
    });

    var layer = new Konva.Layer();
    var count = (sheight / 30);

    var rect = new Konva.Rect({
      x: swidth / 2,
      y: sheight / 2,
      width: swidth,
      height: sheight,
      fill: 'transparent',
      stroke: 'black',
      strokeWidth: 0.5,
      offsetX: swidth / 2,
      offsetY: sheight / 2,
      shadowColor: 'black',
      shadowBlur: 1,
      shadowOffset: { x: 0.5, y: 0.5 },
      shadowOpacity: 0.5
    });

    group.add(rect);

    for (var i = 1; i < Math.round(sheight / count); i++) {

      var line = new Konva.Line({
        points: [0.25, i * count, swidth - 0.25, i * count],
        stroke: '#675fec',
        strokeWidth: 1,
        shadowColor: 'black',
        shadowBlur: 1,
        shadowOffset: { x: 0.5, y: 0.5 },
        shadowOpacity: 0.5
      });

      group.add(line);
    }

    var rect = new Konva.Rect({
      x: 80,
      y: 80,
      width: 20,
      height: 20,
      fill: 'blue',
      stroke: 'black',
      strokeWidth: 0.5,
      offsetX: 10,
      offsetY: 10,
      shadowColor: 'black',
      shadowBlur: 1,
      shadowOffset: { x: 0.5, y: 0.5 },
      shadowOpacity: 0.5
    });

    group.add(rect);

    var started = false;

    group.on('touchmove', function (e) {
      e.evt.preventDefault();
      var touch1 = e.evt.touches[0];
      var touch2 = e.evt.touches[1];

      if (touch1 && touch2) {
        var dist = getDistance(
          {
            x: touch1.clientX,
            y: touch1.clientY
          },
          {
            x: touch2.clientX,
            y: touch2.clientY
          }
        );

        var midPoint = {
          x: (touch1.clientX + touch2.clientX) / 2,
          y: (touch1.clientY + touch2.clientY) / 2
        }

        if (!started) {
          var groupInfo = group.getClientRect();
          var groupW = groupInfo.width;
          var groupH = groupInfo.height;
          var groupX = groupInfo.x;
          var groupY = groupInfo.y;

          var actualX = (midPoint.x - groupX) * (swidth / groupW);
          var actualY = (midPoint.y - groupY) * (sheight / groupH);
          group.offsetX(actualX);
          group.offsetY(actualY);
          started = true;
        }

        group.x(midPoint.x);
        group.y(midPoint.y);

        if (!lastDist) {
          lastDist = dist;
        }

        var scaleX = (group.scaleX() * dist) / lastDist;
        var scaleY = (group.scaleY() * dist) / lastDist;

        group.scaleX(scaleX);
        group.scaleY(scaleY);

        stage.batchDraw();
        lastDist = dist;
      }
    });

    stage.on('touchend', function (e) {
      started = false;
      lastDist = 0;
    });

    layer.add(group);
    stage.add(layer);
    layer.draw();

    stage.scaleX(1);
    stage.scaleY(1);
    stage.batchDraw();
  }

}
