export class Renderer {
    private readonly _canvas: HTMLCanvasElement;
    private readonly _ctx: CanvasRenderingContext2D;

    private direction: number = 0;
    private x: number = 0;
    private y: number = 0;
    private drawing: boolean = false;

    // private lineWidth: number;

    constructor(canvas: HTMLCanvasElement, {scale = 1} : {scale?: number}) {

      this._canvas = canvas;

      // @ts-ignore
      this._ctx = canvas.getContext('2d');

      this.ctx.scale(scale,scale);

      this.ctx.lineCap = 'round';

    }

    get ctx(): CanvasRenderingContext2D {
      return this._ctx;
    }

    get canvas(): HTMLCanvasElement {
      return this._canvas;
    }

  penUp(): void {
      this.drawing = false;
    }

    penDown(): void {
      this.drawing = true;
    }

    private updatePosition(x: number, y: number): void{

      if(this.drawing){
        this.ctx.beginPath();
      }

      this.ctx.moveTo(this.x, this.y);

      this.x = x;
      this.y = y;

      if(this.drawing){
        this.ctx.lineTo(this.x, this.y);
        this.ctx.stroke();
      }
      else{
        this.ctx.moveTo(this.x, this.y);
      }

      if(this.drawing){
        this.ctx.closePath();
      }


    }

    move(distance: number): void {
      const x = this.x + distance * Math.cos(this.direction);
      const y = this.y + distance * Math.sin(this.direction);

      this.updatePosition(x, y);

    }

    forward(distance: number): void {
      this.move(distance);
    }

    backward(distance: number): void {
      this.move(distance * -1);
    }

    goTo(x: number, y: number): void{
      this.updatePosition(x, y);
    }

    rotateLeft(angle: number): void {
      this.direction -= (angle * (Math.PI / 180));
    }

    rotateRight(angle: number): void {
      this.direction += (angle * (Math.PI / 180));
    }

    rotateTo(angle: number): void {
      this.direction = angle;
    }

    clear(): void {
      this.ctx.save();
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.restore();
    }


}
