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

    function getDistance(p1, p2) {
      return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }

    function to_rad(degrees) {
      var pi = Math.PI;
      return degrees * (pi / 180);
    }

    function getCircle(x, y, color) {
      return new Konva.Circle({
        x: x,
        y: y,
        radius: 50,
        fill: color,
        stroke: 'black',
        strokeWidth: 1
      });
    }
    function getLine(x, y) {
      return new Konva.Line({
        points: [0, 0, x, y],
        stroke: 'black',
        strokeWidth: 1.5
      });
    }

    Konva.hitOnDragEnabled = true;

    var width = window.innerWidth;
    var height = window.innerHeight;

    var cells_w = 34;
    var cells_h = 40;
    var side_w = 5;
    var cells_s = 10;

    var cell_stroke = 0.7;
    var field_stroke = 2;

    var field_h = cells_h * cells_s;
    var field_w = cells_w * cells_s;

    var group = new Konva.Group({
      x: width / 2,
      y: height / 2,
      width: field_w,
      height: field_h,
      offsetX: field_w / 2,
      offsetY: field_h / 2
    });

    var rect = new Konva.Rect({
      x: field_w / 2,
      y: field_h / 2,
      width: field_w,
      height: field_h,
      fill: 'white',
      stroke: '#69b0b7',
      strokeWidth: field_stroke,
      offsetX: field_w / 2,
      offsetY: field_h / 2
    });

    group.add(rect);

    for (var i = 0; i < cells_h; i++) {
      var line = new Konva.Line({
        points: [0, i * cells_s, field_w, i * cells_s],
        stroke: '#69b0b7',
        strokeWidth: cell_stroke
      });
      group.add(line);
    }

    for (var i = 0; i < cells_w; i++) {
      var line = new Konva.Line({
        points: [i * cells_s, 0, i * cells_s, field_h],
        stroke: '#69b0b7',
        strokeWidth: cell_stroke
      });
      group.add(line);
    }

    var line = new Konva.Line({
      points: [(cells_w - side_w) * cells_s, 0, (cells_w - side_w) * cells_s, field_h],
      stroke: '#ed7e28',
      strokeWidth: field_stroke
    });

    group.add(line);

    var rect = new Konva.Rect({
      x: field_w / 2,
      y: field_h / 2,
      width: field_w,
      height: field_h,
      fill: 'transparent',
      stroke: '#69b0b7',
      strokeWidth: field_stroke,
      offsetX: field_w / 2,
      offsetY: field_h / 2
    });

    group.add(rect);

    var stage = this.shapes.stage(width, height);
    var started = false;
    var last_dist = null;
    var last_coords = null;
    var total_rotation = 0;

    group.on('touchmove', function (e) {
      e.evt.preventDefault();
      var touch1 = e.evt.touches[0];
      var touch2 = e.evt.touches[1];

      if (touch1 && touch2) {

        var coords = [{
          x: touch1.clientX,
          y: touch1.clientY
        },
        {
          x: touch2.clientX,
          y: touch2.clientY
        }];

        if (last_coords == null) {
          last_coords = coords;
        }

        var m1 = (last_coords[1].y - last_coords[0].y) / (last_coords[1].x - last_coords[0].x)
        var m2 = (coords[1].y - coords[0].y) / (coords[1].x - coords[0].x)
        var angle_deg = -(Math.atan(m1) - Math.atan(m2)) * 180 / Math.PI;

        total_rotation += angle_deg;

        group.rotate(angle_deg);

        var dist = getDistance(coords[0], coords[1]);

        last_coords = coords;

        var midPoint = {
          x: (touch1.clientX + touch2.clientX) / 2,
          y: (touch1.clientY + touch2.clientY) / 2
        }

        if (!started) {
          var groupInfo = group.getClientRect();
          var scale = group.getAbsoluteScale().x;

          var angle = to_rad(group.getAbsoluteRotation());

          var bound_x = Math.cos(angle) * field_w * scale;
          var bound_y = Math.abs(Math.sin(angle) * field_w * scale);

          var x = midPoint.x;
          var y = midPoint.y;

          var relative_x = (x - groupInfo.x) / scale;
          var relative_y = (y - (groupInfo.y + bound_y)) / scale;


          var newActualX = relative_x * Math.cos(-angle) - relative_y * Math.sin(-angle);
          var newActualY = relative_x * Math.sin(-angle) + relative_y * Math.cos(-angle);

          //group.add(getCircle(newActualX, newActualY, "green"));

          group.offsetX(newActualX);
          group.offsetY(newActualY);
          started = true;
        }

        group.position(midPoint);

        if (!last_dist) {
          last_dist = dist;
        }

        var scale = (group.scaleX() * dist) / last_dist;

        if (scale <= 7 && scale >= 0.5) {
          group.scaleX(scale);
          group.scaleY(scale);
        }

        stage.batchDraw();
        last_dist = dist;
      }
    });

    var layer = new Konva.Layer();

    group.scaleX(2.5);
    group.scaleY(2.5);
    group.rotate(-60);

    stage.on('touchend', function (e) {
      started = false;
      last_coords = null;
      last_dist = null;

      /*var midPoint = {
        x: e.evt.changedTouches[0].clientX,
        y: e.evt.changedTouches[0].clientY
      }

      var groupInfo = group.getClientRect();
      var scale = group.getAbsoluteScale().x;

      var angle = to_rad(group.getAbsoluteRotation());

      var bound_x = Math.cos(angle) * field_w * scale;
      var bound_y = Math.abs(Math.sin(angle) * field_w * scale);

      console.log(bound_x, bound_y);

      var x = midPoint.x;
      var y = midPoint.y;

      var relative_x = (x - groupInfo.x) / scale;
      var relative_y = (y - (groupInfo.y + bound_y)) / scale;


      var newActualX = relative_x * Math.cos(-angle) - relative_y * Math.sin(-angle);
      var newActualY = relative_x * Math.sin(-angle) + relative_y * Math.cos(-angle);

      layer.add(getCircle(groupInfo.x, groupInfo.y, "blue"));
      layer.add(getCircle(groupInfo.x + groupInfo.width, groupInfo.y + groupInfo.height, "blue"));
      layer.add(getCircle(groupInfo.x, groupInfo.y + groupInfo.height, "blue"));
      layer.add(getCircle(groupInfo.x + groupInfo.width, groupInfo.y, "blue"));

      layer.add(getCircle(groupInfo.x + bound_x, groupInfo.y, "green"));
      layer.add(getCircle(groupInfo.x, groupInfo.y + bound_y, "pink"));

      group.add(getCircle(newActualX, newActualY, "red"));

      /*if (!isRotated) {
        group.scaleX(height / field_h);
        group.scaleY(height / field_h);
        group.rotate(-45);
        isRotated = true;
      }

      total_rotation = -45;

      var midPoint = {
        x: e.evt.changedTouches[0].clientX,
        y: e.evt.changedTouches[0].clientY
      }

      var groupInfo = group.getClientRect();
      var groupW = groupInfo.width;
      var groupH = groupInfo.height;
      var groupX = groupInfo.x;
      var groupY = groupInfo.y;

      var angle = to_rad(360 - total_rotation);


      var actualX = (midPoint.x - groupX) * (groupW / field_w);
      var actualY = (midPoint.y - groupY) * (groupH / field_h);


      var newActualX = actualX * Math.cos(angle) - actualY * Math.sin(angle);
      var newActualY = actualX * Math.sin(angle) + actualY * Math.cos(angle);

      console.log("===========||===========")
      console.log(total_rotation, "->", angle);
      console.log(actualX, actualY);
      console.log(newActualX, newActualY);
      
      var newActualX = actualX * Math.cos(angle) - actualY * Math.sin(angle);
      var newActualY = actualX * Math.sin(angle) + actualY * Math.cos(angle);

      group.add(getLine(midPoint.x, midPoint.y));
      group.add(getLine(actualX, actualY));
      group.add(getLine(newActualX, newActualX));

      group.add(getCircle(midPoint.x, midPoint.y, "blue"));
      group.add(getCircle(actualX, actualY, "green"));
      group.add(getCircle(newActualX, newActualX, "red"));
      group.add(getCircle(20, 20, "red"));*/


      stage.batchDraw();
    });


    layer.add(group);
    stage.add(layer);
    layer.draw();

    stage.scaleX(1);
    stage.scaleY(1);
    stage.batchDraw();

    this.group = group;
    this.stage = stage;
  }

}
