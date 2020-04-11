import * as Konva from 'konva/konva';

export class FieldModel {

    width: number; // Canvas width.
    height: number; // Canvas height.

    cells_w: number; // Number of cells in a row.
    cells_h: number; // Number of cells in a column.
    side_w: number; // Number of cells for the side field.
    cells_s: number; // Size of the cell.

    cell_stroke: number; // Size of the cell's border.
    field_stroke: number; // Size of the side field's border.

    field_h: number; // Field height.
    field_w: number; // Field width.

    scale_min: number; // Minimal scale.
    scale_max: number; // Maximal scale.
    scale_initial: number; // Initial scale.

    started: boolean = false; // If drag started.
    last_dist: number = null; // Last distance between touches.


    stage: Konva.Stage; // Canvas content container.
    group: Konva.Group; // Field content group.

    constructor(width: number, height: number) {
        this.init(width, height);
    }

    init(width: number, height: number) {
        this.width = width;
        this.height = height;

        this.cells_w = 34;
        this.cells_h = 40;
        this.side_w = 5;
        this.cells_s = 40;

        this.cell_stroke = 1.5;
        this.field_stroke = 4;

        this.field_h = this.cells_h * this.cells_s;
        this.field_w = this.cells_w * this.cells_s;

        let min_height_scale = (this.height - (this.cells_s * 2)) / this.field_h;
        let min_width_scale = (this.width - (this.cells_s * 2)) / this.field_w;

        this.scale_min = min_height_scale < min_width_scale ? min_height_scale : min_width_scale;
        this.scale_max = this.scale_min * 5;

        this.scale_initial = this.scale_min;
    }

    render(): void {
        Konva.hitOnDragEnabled = true;

        this.group = new Konva.Group({
            x: this.width / 2,
            y: this.height / 2,
            width: this.field_w,
            height: this.field_h,
            offsetX: this.field_w / 2,
            offsetY: this.field_h / 2
        });

        this.draw_markings();

        this.change_scale(this.scale_initial);

        this.group.on('touchmove', this.drag_handler);
        this.group.on('touchend', this.touch_handler);

        this.stage = this.get_stage(this.width, this.height);

        this.stage.add(new Konva.Layer().add(this.group));

        this.stage.batchDraw();
    }

    scale(raw_scale): void {
        let scale = this.group.scaleX() + raw_scale;
        this.change_scale(scale, false);
        this.stage.batchDraw();
    }

    private change_scale(scale: number, touch: boolean = true): void {
        if (scale > this.scale_max) {
            scale = this.scale_max;
        } else {
            if (scale < this.scale_min) {
                scale = this.scale_min;

                if (!touch) {
                    this.reset_field_position();
                }
            }
        }

        this.group.scaleX(scale);
        this.group.scaleY(scale);
    }

    private reset_field_position(): void {
        this.group.offsetX(this.field_w / 2);
        this.group.offsetY(this.field_h / 2);
        this.group.position({ x: this.width / 2, y: this.height / 2 });
    }

    private drag_handler = (e) => {
        e.evt.preventDefault();

        let touch1 = e.evt.touches[0];
        let touch2 = e.evt.touches[1];
        let coords = [{ x: touch1.clientX, y: touch1.clientY }];

        let raw_point = coords[0];

        if (touch1 && touch2) {
            coords = [{ x: touch1.clientX, y: touch1.clientY }, { x: touch2.clientX, y: touch2.clientY }];

            raw_point = {
                x: (touch1.clientX + touch2.clientX) / 2,
                y: (touch1.clientY + touch2.clientY) / 2
            }

            let dist = this.get_distance(coords[0], coords[1]);

            if (!this.last_dist) {
                this.last_dist = dist;
            }

            let scale = this.group.scaleX() * dist / this.last_dist;

            this.change_scale(scale)

            this.last_dist = dist;
        }

        if (!this.started) {
            let point = this.get_actual(raw_point)
            this.group.offsetX(point.x);
            this.group.offsetY(point.y);
            this.started = true;
        }

        this.group.position(raw_point);

        this.stage.batchDraw();
    }

    private touch_handler = (e) => {
        e.evt.preventDefault();

        this.started = false;
        this.last_dist = null;

        let raw_point = {
            x: e.evt.changedTouches[0].clientX,
            y: e.evt.changedTouches[0].clientY
        }

        let point = this.get_actual(raw_point)

        this.draw_point(point);

        this.stage.batchDraw();
    }

    private draw_point(point): void {
        if (point.x > 5 && point.x < this.field_w && point.y > 5 && point.y < this.field_h) {
            this.group.add(this.get_circle(point.x, point.y, "pink"));
        }
    }

    private draw_markings(): void {
        var rect = new Konva.Rect({
            x: this.field_w / 2,
            y: this.field_h / 2,
            width: this.field_w,
            height: this.field_h,
            fill: 'white',
            stroke: '#69b0b7',
            strokeWidth: this.field_stroke,
            offsetX: this.field_w / 2,
            offsetY: this.field_h / 2
        });

        this.group.add(rect);

        for (var i = 0; i < this.cells_h; i++) {
            var line = new Konva.Line({
                points: [0, i * this.cells_s, this.field_w, i * this.cells_s],
                stroke: '#69b0b7',
                strokeWidth: this.cell_stroke
            });
            this.group.add(line);
        }

        for (var i = 0; i < this.cells_w; i++) {
            var line = new Konva.Line({
                points: [i * this.cells_s, 0, i * this.cells_s, this.field_h],
                stroke: '#69b0b7',
                strokeWidth: this.cell_stroke
            });
            this.group.add(line);
        }

        var line = new Konva.Line({
            points: [(this.cells_w - this.side_w) * this.cells_s, 0, (this.cells_w - this.side_w) * this.cells_s, this.field_h],
            stroke: '#ed7e28',
            strokeWidth: this.field_stroke
        });

        this.group.add(line);

        var rect = new Konva.Rect({
            x: this.field_w / 2,
            y: this.field_h / 2,
            width: this.field_w,
            height: this.field_h,
            fill: 'transparent',
            stroke: '#69b0b7',
            strokeWidth: this.field_stroke,
            offsetX: this.field_w / 2,
            offsetY: this.field_h / 2
        });

        this.group.add(rect);
    }

    private get_actual(raw_point: any): any {
        var groupInfo = this.group.getClientRect();
        var scale = this.group.getAbsoluteScale().x;
        var angle = this.to_radians(this.group.getAbsoluteRotation());
        var bound_y = Math.abs(Math.sin(angle) * this.field_w * scale);
        var relative_x = (raw_point.x - groupInfo.x) / scale;
        var relative_y = (raw_point.y - (groupInfo.y + bound_y)) / scale;
        var newActualX = relative_x * Math.cos(-angle) - relative_y * Math.sin(-angle);
        var newActualY = relative_x * Math.sin(-angle) + relative_y * Math.cos(-angle);
        return { x: newActualX, y: newActualY };
    }

    private get_stage(width, height): Konva.Stage {
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

    private get_distance(p1, p2) {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }

    private to_radians(degrees) {
        return degrees * (Math.PI / 180);
    }

    private to_degrees(degrees) {
        return degrees * 180 / Math.PI;
    }

    private get_circle(x, y, color): Konva.Circle {
        return new Konva.Circle({
            x: x,
            y: y,
            radius: 10,
            fill: color,
            stroke: 'black',
            strokeWidth: 1
        });
    }

    private get_line(x, y): Konva.Line {
        return new Konva.Line({
            points: [0, 0, x, y],
            stroke: 'black',
            strokeWidth: 1.5
        });
    }
}