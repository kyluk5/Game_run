let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let teacher = new Image();
let bg = new Image();
let fg = new Image();
let pipeBottom = new Image();

teacher.src = "img/teacher.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeBottom.src = "img/pipeBottom.png";

// Звукові файли
let fly = new Audio();
let run_audio = new Audio();

fly.src = "";
run_audio.src = "audio/ran_teacher_ran.mp3";
const call = run_audio.play();
// При натисненні на будь яку клавішу
document.addEventListener("keydown", moveUp);
function moveUp() {
  yPos -= 40;
  fly.play();
}
// Створення блоків
let pipe = [];
pipe[0] = {
  x: canvas.width,
  y: 350,
};

let score = 0;
// Позиція вчителя
let xPos = 20;
let yPos = 410;
let grav = 1.5;

function draw() {
  context.drawImage(bg, 0, 0);

  for (let i = 0; i < pipe.length; i++) {
    context.drawImage(pipeBottom, pipe[i].x, pipe[i].y);
    pipe[i].x--;

    if (pipe[i].x == 30) {
      pipe.push({
        x: canvas.width,
        y: 400,
      });
    }

    if (pipe[i].x == 5) {
      score++;
    }
  }

  //   context.drawImage(pipeBottom, 200, 400);
  context.drawImage(fg, 0, 450, 320, 100);
  context.drawImage(teacher, xPos, yPos);

  yPos += grav;

  context.fillStyle = "#000";
  context.font = "24px Verdana";
  context.fillText("Blow their minds :" + score, 10, canvas.height - 20);

  requestAnimationFrame(draw);
}
pipeBottom.onload = draw;