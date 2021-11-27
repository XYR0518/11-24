var a = 50;
var d = 2 * a;
var x = 0;
function setup() {
  createCanvas(220,220);
  noStroke();
  rectMode(CENTER);
  frameRate(30);    
}

function draw1() {//画圆
  fill(230);
  ellipse(a + 5, a + 5, d, d);
  ellipse(a + 5, 3*a + 10, d, d);
  ellipse(3*a + 10, a + 5, d, d);
  ellipse(3*a + 10, 3*a + 10, d, d); 
}

function draw2() {//扇形
  fill(32);
  x+=0.01;
  arc(a +5, a + 5, d+1, d+1, -x,HALF_PI-x ); 
  arc(a + 5, 3*a + 10, d+1, d+1, HALF_PI+x, PI+x); 
  arc(3*a + 10, a + 5, d+1, d+1, -HALF_PI+x, x); 
  arc(3*a+10 , 3*a + 10, d+1, d+1, PI-x, HALF_PI+PI-x); 
}

function draw(){
  background(32);
  draw1();
  draw2();
  x+=1/16*abs(sin(frameCount/(4*PI)));
}

