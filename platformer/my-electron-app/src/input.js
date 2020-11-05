class InputHandler
{
  constructor(game)
  {
    document.addEventListener('keydown', (event) => {
      switch(event.key)
      {
        case "ArrowLeft":
        console.log("left arrow down");
          game.player.left();
          break;
        case "ArrowRight":
        console.log("right arrow down");
          game.player.right();
          break;
        case " ":
        console.log("spacebar down");
          game.player.jump();
          break;
        case "ArrowUp":
          console.log("up arrow down (the irony of this statement XD)");
          game.player.jump();
          break;
      }
    });
    console.log("Input handler created!");
  }
}