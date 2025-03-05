const character = document.querySelector(".character")
const obstacles = document.querySelector(".obstacles")
const scoreText = document.querySelector(".score")
let score = 0;
let isStarted = false;

function jump() {
    if (character.classList !== "jump") {
      clearTimeout()
      character.classList.add("jump");
      setTimeout(() => {
        character.classList.remove("jump");
      }, 700);
    }
}

function startMoving() {
    if (obstacles.classList !== "move") {
      obstacles.classList.add("move")
    }
  }

function start() {
  if (!isStarted) {
    isStarted = true;
    startMoving();
  }
}

function scoreCounter() {
  if (!isStarted) {
    return;
  }
  score++;
  scoreText.innerHTML = "Score: " + Math.round(score / 20)
  requestAnimationFrame(scoreCounter)
}

function start() {
  if (!isStarted) {
    isStarted = true;
    startMoving();
    scoreCounter();
  }
}

function checkDead() {
  let characterTopPosition = parseInt(window.getComputedStyle(character).getPropertyValue("top"))

  let obstaclesLeftPosition = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"))

  if (obstaclesLeftPosition <= 80 && obstaclesLeftPosition >= 20 && characterTopPosition >= 60) {
    isStarted = false;
    obstacles.classList.remove("move")
    alert("Game Over!")
    score = 0;
  }

  requestAnimationFrame(checkDead)
}

function start() {
  if (!isStarted) {
    isStarted = true;
    startMoving();
    scoreCounter();
    checkDead();
  }
}