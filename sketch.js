var angle = 0;
var x = 300 + 250 * Math.sin(angle) 
var y = 0 + 250 * Math.cos(angle);
var r = 20;
var w =  Math.PI/100;

function setup() {
    createCanvas(600, 600);
    const p = new Pendulum(Math.PI/3);
}

function draw() {
    background(255);
    p.update();
    p.draw();
}