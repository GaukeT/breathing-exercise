let slider;
let step = 0

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  frameRate(1);
  
  // createSlider(min, max, default);
  slider = createSlider(2, 8, 4);
  slider.position(20, 10);
  slider.style('width', '100px');
}

function draw() {
  textSize(12);
  background(80,80,80)
  let val = slider.value();
  noStroke();
  fill(255);
  text(val, 130, 23.5);
  
  // ratio 1, 3, 2 
  let inhale = val * 1;
  let hold = val * 3;
  let exhale = val * 2;
  
  let full = inhale + hold + exhale;
  
  let mi = map(inhale, 0, full, 0, 360);
  let mh = map(hold, 0, full, 0, 360);
  let me = map(exhale, 0, full, 0, 360);   

  translate(width/2, height/2);  
  rotate(-90);
  
  noFill();
  strokeWeight(10);

  stroke(255,179,0);
  arc(0, 0, 220, 220, mi + mh + 1, 359);
  
  stroke(67,160,71);
  arc(0, 0, 220, 220, mi + 1, mi + mh);
  
  stroke(30,136,229);
  arc(0, 0, 220, 220, 1, mi);
  
  stroke(255,179,0);
  arc(0, 0, 220, 220, 359, 360);
  
  if (step >= full) step = 1;
  else step += 1;
  
  let mstep = map(step, 0, full, 0, 360);
  
  stroke(150,150,150);
  strokeWeight(5);
  arc(0, 0, 200, 200, mstep-(50/val), mstep);
  
  rotate(90);
  noStroke();
  fill(255);
  if (step <= inhale) {
    text('Inhale', -14, 0);
  } else if (step > inhale && step <= hold + inhale) {
    text('Hold', -12, 0);
  } else {
    text('Exhale', -14, 0);
  }
}

