let canvas = document.getElementById("gamescreen");
let ctx = canvas.getContext("2d");
let game = new Game();
game.start();

let lastTime = 0;

function gameLoop(timestamp)
{
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0,0,2000,2000);
  game.update(deltaTime);
  game.draw(ctx);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);