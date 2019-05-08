class Pendulum {
    constructor() {
        this.r = 20;
        this.g = Math.PI / 576;
        this.t = Math.PI/3;
        this.w = 0;
        this.a = this.g * Math.sin(-this.t);
        this.x = 300 + 250 * Math.sin(this.t);
        this.y = 250 * Math.cos(this.t);    
        this.update = function () {
            this.a = this.g * Math.sin(-this.t);
            this.w += this.a;
            this.t += this.w;
            this.x = 300 + 250 * Math.sin(this.t);
            this.y = 250 * Math.cos(this.t);
        };
        this.draw = function () {
            fill(0);
            stroke(0);
            line(300, 0, this.x, this.y);
            ellipse(this.x, this.y, this.r, this.r);
        };
    }
}