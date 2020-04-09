import { Injectable } from '@angular/core';

import * as Konva from 'konva/konva';

@Injectable({
  providedIn: 'root'
})
export class CanvasService {

  constructor() { }

  stage(width, height): Konva.Stage {
    return new Konva.Stage({
      container: 'container',
      width: width,
      height: height,
      x: width / 2,
      y: height / 2,
      offsetX: width / 2,
      offsetY: height / 2
    });
  }
}
