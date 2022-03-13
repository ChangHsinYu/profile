export default function Sketch(p5) {
  let ballNum = 10;
  let ballSize = 15;
  let ballX = [];
  let ballY = [];
  let ballZ = [];
  let ballTh = [];
  let ballPh = [];
  let thSpeed = [];
  let phSpeed = [];
  let rad = 0;

  p5.setup = () => {
    if(window.innerWidth>800){
      p5.createCanvas(window.innerWidth*2/3, window.innerHeight*2/3, p5.WEBGL);
      ballSize = p5.canvas.width/20;
    }
    else{
      p5.createCanvas(window.innerWidth, window.innerHeight*0.7, p5.WEBGL);
      ballSize = p5.canvas.height/15;
    }
    p5.noStroke();
    let i = 0;
    for(; i < ballNum; i++){
      ballTh[i] = p5.random(0, 2*p5.PI);
      ballPh[i] = p5.random(0, 2*p5.PI);
      thSpeed[i] = p5.random(0, 0.05);
      phSpeed[i] = p5.random(0, 0.05);
    }
  };

  p5.draw = () => {
    p5.background(255);
    p5.rotateX(rad);
    p5.rotateY(rad);
    rad += 0.001;
    let i = 0;
    for(; i < ballNum; i++){
      ballX[i] = ballSize * p5.cos(ballTh[i]) * p5.cos(ballPh[i]);
      ballY[i] = ballSize * p5.sin(ballTh[i]) * p5.cos(ballPh[i]);
      ballZ[i] = ballSize * p5.sin(ballPh[i]);
      p5.ballPos(ballX[i], ballY[i], ballZ[i]);
      ballTh[i] += thSpeed[i];
      ballPh[i] += phSpeed[i];
    }
  };

  p5.ballPos = function (x, y, z){
    p5.translate(x, y, z);
    p5.noStroke();
    p5.fill(0);
    p5.sphere(ballSize, 36, 36);
    p5.translate(-x, -y, -z);
  };

  p5.windowResized = function() {
      if(window.innerWidth>800){
        p5.resizeCanvas(window.innerWidth*2/3, window.innerHeight*2/3);
        ballSize = p5.canvas.width/20;
      }
      else{
        p5.resizeCanvas(window.innerWidth, window.innerHeight*0.7);
        ballSize = p5.canvas.height/15;
      }
    };
}
