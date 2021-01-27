let slider;
let button;
let step = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(1);
  
  setupSlider();
  setupButton();
}

function draw() {
  background(80,80,80);
  
  // Grep slider value
  let val = slider.value();
  drawSliderValue(val);
  
  // Calculate ratio (1, 3, 2)
  let inhale = val * 1;
  let hold = val * 3;
  let exhale = val * 2;
  let full = inhale + hold + exhale;

  translate(width/2, height/2);
  push();
  rotate(-90);  
  noFill();  
 
  drawOuterCirkel();
  
  // Determine next step
  if (step >= full) step = 1;
  else step += 1;
  
  drawInner(step, full, val);
  pop();

  drawStatus(step, inhale, hold);
}

function drawStatus(step, inhale, hold) {
  push();
  fill(255);
  textStyle(BOLD);
  textSize(20);
  textAlign(CENTER, CENTER);
  if (step <= inhale) {
    text('Inhale', 0, 0);
  } else if (step > inhale && step <= hold + inhale) {
    text('Hold', 0, 0);
  } else {
    text('Exhale', 0, 0);
  }
  pop();
}

function drawSliderValue(val) {
  push();
  fill(255);
  textSize(12);
  text(val, 130, 23.5);
  pop();
}

function drawInner(step, full, val) {
  let mstep = map(step, 0, full, 0, 360); 
  stroke(150,150,150);
  strokeWeight(5);
  arc(0, 0, 200, 200, mstep-(50/val), mstep);	
}

function drawOuterCirkel() {
  // ratio 1, 3, 2
  let mi = 60, mh = 180, me = 120;

  strokeWeight(10);  

  // Yellow
  stroke(255,179,0);
  arc(0, 0, 220, 220, 0, 360);
  // Green
  stroke(67,160,71);
  arc(0, 0, 220, 220, 0, mi + mh);
  // Blue
  stroke(30,136,229);
  arc(0, 0, 220, 220, 0, mi);
  // Yellow
  stroke(255,179,0);
  arc(0, 0, 220, 220, 359, 360);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  button.position(20, windowHeight-40);
}

function setupSlider() {
  // createSlider(min, max, default);
  slider = createSlider(2, 8, 4);
  slider.position(20, 10);
  slider.style('width', '100px');
}

function setupButton() {
  button = createButton('reset');
  button.position(20, windowHeight-40);
  button.mousePressed(resetSteps);
  button.style('border', 'none');
  button.style('padding', '6px 10px');
  button.style('border-radius', '6px');
  button.style('transition-duration', '0.4s');		
}

function resetSteps() {
  step = -0;
}
