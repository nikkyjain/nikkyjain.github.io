var canvas = document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');

// Function to generate random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// Function to create and update circle
function Circle(x, y, xAng, yAng, radius, rRadius) {
	this.x = x;
	this.y = y;
	this.xAng=xAng;
	this.yAng=yAng;
	this.radius=radius;
	this.rRadius=rRadius;
	this.color = getRandomColor();
	
	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = this.color;
		c.fillStyle = this.color;
		c.fill();
		c.stroke();
	}
	
	this.update = function() {
		this.xAng=(this.xAng+1)%360;
		this.yAng=(this.yAng+1)%360;
		this.x = window.innerWidth/2+(this.rRadius*Math.cos((this.xAng)*(Math.PI/180)));
		this.y = window.innerHeight/2+(this.rRadius*Math.sin((this.yAng)*(Math.PI/180)));
		this.draw();
	}
}

var circleArray = [];
var NumOfCircles=2;
for (var i=0; i<NumOfCircles; i++) {
	var radius = 30;
	var x = window.innerWidth/2+(30*Math.cos((i*360/NumOfCircles)*(Math.PI/180)));
	var y = window.innerHeight/2+(30*Math.sin((i*360/NumOfCircles)*(Math.PI/180)));
	circleArray.push(new Circle(x,y,(i*360/NumOfCircles),(i*360/NumOfCircles),20, 80));
}
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, window.innerWidth, window.innerHeight);
	for (var i=0; i<circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();