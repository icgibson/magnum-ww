var x1 = 807; var y1 = 340;
var x2 = 904; var y2 = 314;
var x3 = 821; var y3 = 230;
var x4 = 1040; var y4 = 280;
var x5 = 757; var y5 = 247;
var x6 = 991; var y6 = 350;
var x7 = 293; var y7 = 266;
var x8 = 426; var y8 = 607; 
var x9 = 1200; var y9 = 300;

var socket;

var io = require('socket.io').listen(server);

server.listen(3000);

function setup() {
	createCanvas(1440, 900);
	socket = io.connect('http://localhost:8000');
	bg = loadImage("img/worldmap.png");
	background(bg);
}

function draw() {

}