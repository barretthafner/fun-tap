//Just being held here for reference, paper.js doesn't support running locally from a sepereate file


// var keyData = {
//   a: {
//     color: "purple",
//     sound: new Howl({
//       urls: ['assets/sounds/clay.mp3']
//     })
//   },
//   s: {
//     color: "yellow",
//     sound: new Howl({
//       urls: ['assets/sounds/bubbles.mp3']
//     })
//   }
// }


var keyData = {
	q: {
		sound: new Howl({
  		urls: ['assets/sounds/bubbles.mp3']
		}),
		color: '#1abc9c'
	},
	w: {
		sound: new Howl({
  		urls: ['assets/sounds/clay.mp3']
		}),
		color: '#2ecc71'
	},
	e: {
		sound: new Howl({
  		urls: ['assets/sounds/confetti.mp3']
		}),
		color: '#3498db'
	},
	r: {
		sound: new Howl({
  		urls: ['assets/sounds/corona.mp3']
		}),
		color: '#9b59b6'
	},
		t: {
		sound: new Howl({
  		urls: ['assets/sounds/dotted-spiral.mp3']
		}),
		color: '#34495e'
	},
	y: {
		sound: new Howl({
  		urls: ['assets/sounds/flash-1.mp3']
		}),
		color: '#16a085'
	},
	u: {
		sound: new Howl({
  		urls: ['assets/sounds/flash-2.mp3']
		}),
		color: '#27ae60'
	},
	i: {
		sound: new Howl({
  		urls: ['assets/sounds/flash-3.mp3']
		}),
		color: '#2980b9'
	},
	o: {
		sound: new Howl({
			urls: ['assets/sounds/glimmer.mp3']
		}),
		color: '#8e44ad'
	},
	p: {
		sound: new Howl({
  		urls: ['assets/sounds/moon.mp3']
		}),
		color: '#2c3e50'
	},
	a: {
		sound: new Howl({
  		urls: ['assets/sounds/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	s: {
		sound: new Howl({
  		urls: ['assets/sounds/piston-1.mp3']
		}),
		color: '#e67e22'
	},
		d: {
		sound: new Howl({
  		urls: ['assets/sounds/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
  		urls: ['assets/sounds/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	g: {
		sound: new Howl({
  		urls: ['assets/sounds/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	h: {
		sound: new Howl({
  		urls: ['assets/sounds/prism-3.mp3']
		}),
		color: '#d35400'
	},
	j: {
		sound: new Howl({
  		urls: ['assets/sounds/splits.mp3']
		}),
		color: '#1abc9c'
	},
	k: {
		sound: new Howl({
  		urls: ['assets/sounds/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	l: {
		sound: new Howl({
  		urls: ['assets/sounds/strike.mp3']
		}),
		color: '#3498db'
	},
	z: {
		sound: new Howl({
  		urls: ['assets/sounds/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
  		urls: ['assets/sounds/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
  		urls: ['assets/sounds/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
  		urls: ['assets/sounds/veil.mp3']
		}),
		color: '#27ae60'
	},
	b: {
		sound: new Howl({
  		urls: ['assets/sounds/wipe.mp3']
		}),
		color: '#2980b9'
	},
	n: {
		sound: new Howl({
			urls: ['assets/sounds/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
  		urls: ['assets/sounds/moon.mp3']
		}),
		color: '#2c3e50'
	}
}

var circles = [];



function onKeyDown(event) {
  if (keyData[event.key]){
    key = keyData[event.key];
    //play the sound
    key.sound.play();
    // get random point on canvas
    var randomPoint = new Point(view.size) * Point.random();

    //get random hue value for hsb color
    // var randomHue = Math.floor(Math.random() * 361);
    //generate a circle
    var circle = new Path.Circle({
      center: randomPoint,
      radius: 200,
      fillColor: key.color
     });
    //push it onto the circles array
    circles.push(circle);
  }
}

//loop through an animate each circle
function onFrame(event) {
  for (var i = 0; i < circles.length; i++) {
    circles[i].fillColor.hue += 1;
    circles[i].scale(0.9);
  }
}
