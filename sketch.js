var p;

function setup() {
    createCanvas(600, 600);
    p = new Pendulum();
}

function draw() {
    background(255);
    p.update();
    p.draw();
}