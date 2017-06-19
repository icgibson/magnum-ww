var fingers;
var playing = false;
var button;
var bg;
var minDis = 10;
//The radius of ellipse
var R = 20;

var boston;

var x1 = 807;
var y1 = 340;

var x2 = 904;
var y2 = 314;


var x3 = 821;
var y3 = 230;

var x4 = 1040;
var y4 = 280;

var x5 = 757;
var y5 = 247;

var x6 = 991;
var y6 = 350;


var x7 = 293;
var y7 = 266;

var x8 = 426;
var y8 = 607;

var x9 = 1200;
var y9 = 300;

var Vwidth = 0;
var Vheight = 0;

var play1 = false;
var play2 = false;
var play3 = false;
var play4 = false;
var play5 = false;
var play6 = false;
var play7 = false;
var play8 = false;
var play9 = false;


// This is for websocket
var socket;



function setup() {
  createCanvas(1440, 900);
  boston = ellipse(x1,y1,R,R);
  boston.addEventListener('click', function() {
  	console.log('boston clicked');
  });
  
  socket = io.connect('http://localhost:8000');

  // specify multiple formats for different browsers
  

  //Copyright @ Free Vector Maps.com                       
  bg = loadImage("assets/worldmap_Cut.png");

}

function sendMouse(){
	
	
}

function draw() {
	
	
    background(bg);// draw the video frame to canvas
    
        fill(145,40,61);
    noStroke();
    
    boston = ellipse(x1,y1,R,R);
    ellipse(x2, y2,R,R);
    ellipse(x3, y3,R,R);
    ellipse(x4, y4,R,R);
    ellipse(x5, y5,R,R);
    ellipse(x6, y6,R,R);
    ellipse(x7, y7,R,R);
    ellipse(x8, y8,R,R);
    ellipse(x9, y9,R,R);
    push();
    imageMode(CENTER);
    
    if (play1 == true){
 
    }
    
        if (play2 == true){

    }
    
        if (play3 == true){

    }
    
        if (play4 == true){

    }
    
        if (play5 == true){

    }
    
        if (play6 == true){

    }
    
        if (play7 == true){

    }
    
        if (play8 == true){

    }
    
        if (play9 == true){

    }
    
    

    pop();
    
}



function mousePressed() {
	
	
	//Send the mouseX, mouseY to the [projection sketch]
		var data = {
		x : mouseX,
		y : mouseY
	}
	
	socket.emit ('mouse', data);
	
	// Determine which dot is hit
	console.log(mouseX,mouseY);
	var size1 = dist(mouseX, mouseY, x1, y1);
	var size2 = dist(mouseX, mouseY, x2, y2);
	var size3 = dist(mouseX, mouseY, x3, y3);
	var size4 = dist(mouseX, mouseY, x4, y4);
	var size5 = dist(mouseX, mouseY, x5, y5);
	var size6 = dist(mouseX, mouseY, x6, y6);
	var size7 = dist(mouseX, mouseY, x7, y7);
	var size8 = dist(mouseX, mouseY, x8, y8);
	var size9 = dist(mouseX, mouseY, x9, y9);
	if (size1< minDis){

	}
	
	if (size2< minDis){

		
	}
	
	if (size3< minDis){

	}
	
	if (size4< minDis){

	}
	
	if (size5< minDis){

	}
	
	if (size6< minDis){

	}
	
	if (size7< minDis){

	}
	
	if (size8< minDis){

	}
	
	if (size9< minDis){

	}
	

}
