function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
}

let R=255;
let G=255;
let B=255;
let ratio=0;
let ratio0=0;
let go=false;
let temp=ratio;
let temp0=0;

function draw() {
  background(R,G,B);
  ratio0+=0.01;
  
  fill(0,255,0);
  
  star();
  Akey();
  BKey();
  CKey();

  if(mouseIsPressed){
    if(R>=0&&G>=0&&B>=0)
    {
    R--;
    //G--;
    //B--;
    pressed();
    go=true;
    ratio+=0.01;
    temp0=ratio;}
  }
  else{
    if(R<=255&&G<=255&&B<=255){
    R++;
    //G++;
    //B++;
    go=false;
    ratio=0;
    temp=temp0+temp;
    }
    
  }
  //文本
  
  strokeWeight(0);
  fill(0,0,0);
  textSize(40);
  textStyle(NORMAL);
  text('Selling Inspiration', 20, 100);
  
  textSize(20);
  text('作家把一些支离破碎的想法编织进一个连贯的愿景里，',20,windowHeight/2+100);
  text('这个愿景便化作发明家的Road Map.',20,windowHeight/2+140);
  text('——尼尔·斯蒂芬森',300,windowHeight/2+180);
  
  text('VR眼镜：',windowWidth/2+200,100);
  text('《皮格马利翁的眼镜》——斯坦利·温鲍姆',windowWidth/2+200,140);
  text('《雪崩》——尼尔·斯蒂芬森',windowWidth/2+200,180);
  text('《玩家一号》——恩斯特·克莱恩',windowWidth/2+200,220);
  
  text('脑机接口：',windowWidth/2+200,300);
  text('《真名实姓与其他危险》—— 弗诺·文奇',windowWidth/2+200,340);
  text('《副本》——理查德·摩根',windowWidth/2+200,380);

  
  text('MUV Interactive：',windowWidth/2+200,460);
  text('《少数派报告》——菲利普·迪克',windowWidth/2+200,500);
  text('《三体》——刘慈欣',windowWidth/2+200,540);
}

function mouseMoved() {

}

function pressed(){
  for (let i = 0; i < 5; i++) {
  let r = random(-50,50);
  let j = random(-50,50);
  let n = random(50);
fill(random(255),random(255),random(255));
    circle(mouseX+r,mouseY+j,n);
}
}

function star(){
  push();
  rotate(ratio0);
  /*//translate(-50,-50);
  fill(0,255,0);
  let x1=50,y1=0;
  let x2=0,y2=85;
  let x3=100,y3=85;
  triangle(x1,y1,x2,y2,x3,y3);
  let x4=50,y4=115;
  let x5=0,y5=35;
  let x6=100,y6=35;
  triangle(x4,y4,x5,y5,x6,y6);
  //square(0,0,100);
  
  fill(0,255,255);
  let x1=350,y1=0;
  let x2=300,y2=85;
  let x3=400,y3=85;
  triangle(x1,y1,x2,y2,x3,y3);
  
  fill(100,50,50);
  circle(300,300,100);
  
  fill(0,0,255);
  square(0,300,100);
  
    fill(255,0,255);
  let x4=-350,y4=0;
  let x5=-300,y5=85;
  let x6=-400,y6=85;
  triangle(x4,y4,x5,y5,x6,y6);
  
  fill(100,50,50);
  circle(-200,-200,100);
  
  fill(0,0,255);
  square(0,-300,100);*/
  
  architecture();
  planetOne();
  UFO();
  panletTwo();
  statellite();
  planetThree();
  pop();
}

function architecture(){
  push();
  translate(0,150);
  fill(255,69,0);
  triangle(0,175,25,200,25,150);
  triangle(0,225,25,200,25,250);
  triangle(25,190,25,210,60,200);
  fill(232,232,232);
  ellipse(0,200,100,50);
  fill(187,255,255);
  circle(0,200,10);
  pop();
}

function planetOne(){
  push();
  translate(105,105);
  fill(176,224,230);
  circle(140,140,40);
  fill(175,238,238);
  arc(140,140, 80, 80, PI + QUARTER_PI, TWO_PI + QUARTER_PI);
  fill(0,206,209);
  circle(150,150,5);
  circle(130,150,10);
  circle(160,160,10);
  circle(150,140,5);
  pop();
}

function UFO(){
  push();
  translate(150,0);
  fill(0,139,69);
  ellipse(200,0,100,30);
  fill(54,54,54);
  ellipse(200,-10,50,20);
  fill(0,134,139);
  ellipse(200,-15,30,15);
  pop();
}

function panletTwo(){
  push();
  translate(105,-105);
  fill(238,154,73);
  circle(140,-140,40);
  fill(205,133,63);
  arc(140,-140, 80, 80, PI + QUARTER_PI, TWO_PI + QUARTER_PI);
  strokeWeight(10);
  stroke(205,38,38);
  noFill();
  arc(140,-140,100,20,PI, TWO_PI);
  pop();
}

function statellite(){
  push();
  translate(0,-150);
  fill(0,0,255);
  rect(-40,-220,80,30);
  fill(238,201,0);
  rect(-20,-225,40,50);
  fill(0,0,255);
  circle(0,-200,10);
  pop();
}

function planetThree(){
  push();
  translate(-105,-105);
  fill(0,205,0);
  circle(-140,-140,40);
  fill(0,139,0);
  arc(-140,-140, 80, 80, PI + QUARTER_PI, TWO_PI + QUARTER_PI);
  fill(151,255,255);
  circle(-150,-150,10);
  circle(-150,-115,10);
  translate(-40,-40);
  rotate(3*ratio);
  translate(40,40);
  fill(139,139,122);
  circle(-180,-180,5);
  pop();
}

function Akey(){
  push();
  translate(windowWidth/2,windowHeight/2);
  if(go)
  {
  rotate(3*ratio+3*temp);
  }
  else
  {
    rotate(3*temp);
  }
  translate(-windowWidth/2,-windowHeight/2);
  strokeWeight(10);
  stroke(144,238,144);
  noFill();
  arc(windowWidth/2, windowHeight/2, 220, 220, PI + QUARTER_PI, TWO_PI);
  pop();
  
  push();
  translate(windowWidth/2,windowHeight/2);
  if(go)
  {
  rotate(2*ratio+2*temp);
  }
  else
  {
    rotate(2*temp);
  }
  translate(-windowWidth/2,-windowHeight/2);
  strokeWeight(10);
  stroke(180,238,180);
  noFill();
  arc(windowWidth/2, windowHeight/2, 260, 260, HALF_PI, PI);
  pop();
  
  push();
  translate(windowWidth/2,windowHeight/2);
  if(go)
  {
  rotate(ratio+temp);
  }
  else
  {
    rotate(temp);
  }
  translate(-windowWidth/2,-windowHeight/2);
  strokeWeight(10);
  stroke(193,255,193);
  noFill();
  arc(windowWidth/2, windowHeight/2, 300, 300, PI + QUARTER_PI, HALF_PI);
  pop();
  
  push();
  translate(windowWidth/2,windowHeight/2);
  if(go)
  {
  rotate(ratio+temp);
  }
  else
  {
    rotate(temp);
  }
  translate(-windowWidth/2,-windowHeight/2);
  strokeWeight(10);
  stroke(84,139,84);
  noFill();
  arc(windowWidth/2, windowHeight/2, 60, 60, PI + QUARTER_PI, HALF_PI);
  pop();

  
  push();
  translate(windowWidth/2,windowHeight/2);
  if(go)
  {
  rotate(2*ratio+2*temp);
  }
  else
  {
    rotate(2*temp);
  }
  translate(-windowWidth/2,-windowHeight/2);
  strokeWeight(10);
  stroke(124,205,124);
  noFill();
 arc(windowWidth/2, windowHeight/2, 90, 90, HALF_PI, PI);
  pop();
  
  push();
  translate(windowWidth/2,windowHeight/2);
  if(go)
  {
  rotate(3*ratio+3*temp);
  }
  else
  {
    rotate(3*temp);
  }
  translate(-windowWidth/2,-windowHeight/2);
  strokeWeight(10);
  stroke(144,238,144);
  noFill();
  arc(windowWidth/2, windowHeight/2, 120, 120, PI + QUARTER_PI, TWO_PI);
  pop();
}

function BKey(){
    push();
    translate(-200,-240);
    
  push();
  translate(windowWidth/2,windowHeight/2);
  if(go)
  {
  rotate(3*ratio+3*temp);
  }
  else
  {
    rotate(3*temp);
  }
  translate(-windowWidth/2,-windowHeight/2);
  strokeWeight(10);
  stroke(178,223,238);
  noFill();
  arc(windowWidth/2, windowHeight/2, 220, 220, PI, TWO_PI);
  pop();
  
  push();
  translate(windowWidth/2,windowHeight/2);
  if(go)
  {
  rotate(2*ratio+2*temp);
  }
  else
  {
    rotate(2*temp);
  }
  translate(-windowWidth/2,-windowHeight/2);
  strokeWeight(10);
  stroke(191,239,255);
  noFill();
  arc(windowWidth/2, windowHeight/2, 260, 260, HALF_PI, TWO_PI);
  pop();
  
  
  push();
  translate(windowWidth/2,windowHeight/2);
  if(go)
  {
  rotate(ratio+temp);
  }
  else
  {
    rotate(temp);
  }
  translate(-windowWidth/2,-windowHeight/2);
  strokeWeight(10);
  stroke(104,131,139);
  noFill();
  arc(windowWidth/2, windowHeight/2, 60, 60, QUARTER_PI, TWO_PI);
  pop();

  
  push();
  translate(windowWidth/2,windowHeight/2);
  if(go)
  {
  rotate(2*ratio+2*temp);
  }
  else
  {
    rotate(2*temp);
  }
  translate(-windowWidth/2,-windowHeight/2);
  strokeWeight(10);
  stroke(122,139,139);
  noFill();
 arc(windowWidth/2, windowHeight/2, 90, 90, HALF_PI, PI+HALF_PI);
  pop();
  
  push();
  translate(windowWidth/2,windowHeight/2);
  if(go)
  {
  rotate(3*ratio+3*temp);
  }
  else
  {
    rotate(3*temp);
  }
  translate(-windowWidth/2,-windowHeight/2);
  strokeWeight(10);
  stroke(154,192,205);
  noFill();
  arc(windowWidth/2, windowHeight/2, 120, 120, PI + QUARTER_PI, TWO_PI);
  pop();
  pop();
}

function CKey(){
    push();
    translate(200,-180);
    
  push();
  translate(windowWidth/2,windowHeight/2);
  if(go)
  {
  rotate(3*ratio+3*temp);
  }
  else
  {
    rotate(3*temp);
  }
  translate(-windowWidth/2,-windowHeight/2);
  strokeWeight(10);
  stroke(255,236,139);
  noFill();
  arc(windowWidth/2, windowHeight/2, 220, 220, PI, TWO_PI);
  pop();
  
  
  push();
  translate(windowWidth/2,windowHeight/2);
  if(go)
  {
  rotate(ratio+temp);
  }
  else
  {
    rotate(temp);
  }
  translate(-windowWidth/2,-windowHeight/2);
  strokeWeight(10);
  stroke(139,129,76);
  noFill();
  arc(windowWidth/2, windowHeight/2, 60, 60, PI, HALF_PI + QUARTER_PI);
  pop();

  
  push();
  translate(windowWidth/2,windowHeight/2);
  if(go)
  {
  rotate(2*ratio+2*temp);
  }
  else
  {
    rotate(2*temp);
  }
  translate(-windowWidth/2,-windowHeight/2);
  strokeWeight(10);
  stroke(205,190,112);
  noFill();
 arc(windowWidth/2, windowHeight/2, 90, 90, HALF_PI, PI);
  pop();
  
  push();
  translate(windowWidth/2,windowHeight/2);
  if(go)
  {
  rotate(3*ratio+3*temp);
  }
  else
  {
    rotate(3*temp);
  }
  translate(-windowWidth/2,-windowHeight/2);
  strokeWeight(10);
  stroke(238,220,130);
  noFill();
  arc(windowWidth/2, windowHeight/2, 120, 120, PI, TWO_PI + QUARTER_PI);
  pop();
  pop();
}