
let inconsolata;
var colors = ['"yellow"', '"green"', '"blue"', '"cyan"', '"magenta"'];
var color = random(colors);

function preload() {
  inconsolata = loadFont('assets/Inconsolata.otf');
}
function setup() {
  createCanvas(window.width, window.height, WEBGL);
  textFont(inconsolata);
  textSize(width / 10);
  textAlign(CENTER, CENTER);
 
}
function draw() {
    background(146,189,231);
    let time = millis();
    let x = random(0, 255);
    let y = random(0, 255);
    rotateX(time / 10);
    rotateZ(time / 14);
    fill(x, y, x);
    frameRate(100);
    text('5.Punkte Lösung', 0, 0);
}
