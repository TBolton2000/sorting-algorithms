let numbers;
let button0;
let button1;
let button2;
let button3;
let button4;
let button5;
let input;
let algoIndex = 0;
let algorithms = [selectionSort,insertionSort];
let algoNames = ["Selection Sort","Insertion Sort"];
let modeIndex = 0;
let drawModes = [drawNumbers,drawColors];
let drawModesNames = ["Rectangles","Colors"];
let N = 100;
let i;
let j;
let minIndex = i;
let showArrows = false;
let speed = 100;
let scale = 100/N;
let speedSlider;
let interupter = false;
let drawMode = drawNumbers;

function setup() {
    createCanvas(800, 400);

    i = 0;
    j = 0;
    minIndex = i;

    generateRandom();
    drawMode = drawModes[modeIndex];

    
    button0 = createButton(drawModesNames[modeIndex]);
    button0.position(650,50);
    button0.mousePressed(toggleDrawMode);

    button1 = createButton(algoNames[algoIndex]);
    button1.position(650,100);
    button1.mousePressed(toggleAlgorithm);

    button2 = createButton("Step");
    button2.position(650,150);
    button2.mousePressed(stepSelectionSort);

    button3 = createButton("Run");
    button3.position(650,200);
    button3.mousePressed(algorithms[algoIndex]);

    button4 = createButton("Reset");
    button4.position(650,250);
    button4.mousePressed(generateRandom);

    button4 = createButton("Stop");
    button4.position(340,375);
    button4.mousePressed(stopAll);

    input = createInput("100");
    input.position(160,375);
    input.input(inputFunc);

    speedSlider = createSlider(1,100,50,1);
    speedSlider.position(10,375);

}

function draw() {
    background(255);
    drawMode();
    speed = speedSlider.value();
    text("Speed: "+speed,45,365);
    if(showArrows) {
        // drawMyArrow(j,0);
        // drawMyArrow(minIndex,color(255,0,0));
        drawAuxillary([j,minIndex]);
    }
}

function generateRandom() {
  numbers = [];
  for(let i = 1; i <= N;i++){
    numbers.push(i);
  }
  //Randomize the list
  for(let i = 1; i <= N*10; i++){
    let i = floor(random(0,100*N))%N;
    let j = floor(random(0,100*N))%N;
    [numbers[i],numbers[j]] = [numbers[j],numbers[i]];
  }
  return numbers;
  // for (var num of numbers) {
  //   console.log(num);
  // }
}

function drawNumbers() {
    fill(0,0,255);
    for(let i = 0; i < N; i++) {
        rect(10+6*i*scale,height*2/3,4*scale,-(numbers[i]*2)*scale);
    }
}

function drawColors() {
    noStroke();
    for(let i = 0; i < N; i++) {
        fill(floor(numbers[i]*2.55*scale),floor(numbers[i]*2.55*scale),255)
        rect(10+6*i*scale,height*2/3,4*scale,-200)
    }
}

function drawAuxillary(arrows){
    colors = [color(0,0,255),color(51,153,255),color(0,204,255),color(0,51,153),color(0,0,102)]
    for(let k = 0; k < arrows.length; k++) {
        drawMyArrow(arrows[k],colors[k%colors.length]);
    }
}

function drawMyArrow(index, color) {
  drawArrow(createVector(index*6*scale+10+2*scale,height*5/6), createVector(0,5-height/6), color);
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function toggleAlgorithm(){
  algoIndex = (algoIndex + 1)%algorithms.length;
  button1.remove(); 
  button1 = createButton(algoNames[algoIndex]);
  button1.position(650,100);
  button1.mousePressed(toggleAlgorithm);
  
  button3.remove();
  button3 = createButton("Run");
  button3.position(650,200);
  button3.mousePressed(algorithms[algoIndex]);
  
  console.log("toggling " + algoIndex + algoNames[algoIndex]); 
}

function toggleDrawMode(){
    modeIndex = (modeIndex + 1)%drawModes.length;
    button0.remove(); 
    button0 = createButton(drawModesNames[modeIndex]);
    button0.position(650,50);
    button0.mousePressed(toggleDrawMode);
    
    drawMode = drawModes[modeIndex];

    console.log("toggling draw mode: " + drawModesNames[modeIndex]); 
  }

// function setFields(this1) {
//     return new Promise(resolve => {
//         N = parseInt(this1.value());
//         scale = 100/N;
//     });
// }

async function inputFunc() {
    // await setFields(this);
    N = parseInt(this.value());
    scale = 100/N;
    console.log("Go? " + N + " " + scale);
    generateRandom();
    i = 0;
    j = 0;
    minIndex = 0;
}

function generateN() {
    generateRandom();
    i = 0;
    j = 0;
    minIndex = 0;
}

function stopAll(){
    interupter = true;
}