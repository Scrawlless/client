import { Injectable } from '@angular/core';

import * as Konva from 'konva/konva';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  constructor() { }

  stage(width, height, scale): Konva.Stage {
    return new Konva.Stage({
      container: 'container',
      width: width,
      height: height,
      draggable: true,
      x: width / 2,
      y: height / 2 * scale,
      offsetX: width / 2,
      offsetY: height / 2
    });
  }
}
