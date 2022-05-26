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
function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius=radius;
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
		if (this.x+this.radius>canvas.width || this.x-this.radius<0	) {
			this.dx=-this.dx;
		}
		if (this.y+this.radius>canvas.height || this.y-this.radius<0) {
			this.dy=-this.dy;
		}
		this.x+=this.dx;
		this.y+=this.dy;
		this.draw();
	}
}

var circleArray = [];
for (var i=0; i<100; i++) {
	var radius = 30;
	var x = (Math.random() * (canvas.width-(radius*2)))+radius;
	var y = (Math.random() * (canvas.height-(radius*2)))+radius;
	var dx=(Math.random()-0.5) * 5, dy=(Math.random()-0.5) * 5;
	circleArray.push(new Circle(x,y,dx,dy,30));
}
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, window.innerWidth, window.innerHeight);
	for (var i=0; i<circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();