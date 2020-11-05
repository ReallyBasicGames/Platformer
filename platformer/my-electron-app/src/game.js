const GAMESTATE = {
  MENU: 0,
  PAUSED: 1,
  RUNNING: 2,
  GAMEOVER: 3,
  LOSE: 4,
  WIN: 5
}



class Game
{
  
  constructor()
  {
    console.log("Initializing game...");
    let gamestate = GAMESTATE.RUNNING;
    new InputHandler(this);
    this.player = new Player(this);
    console.log("Game initialized!");

  }

  start()
  {
    console.log("Building level...");
    let blocks = buildLevel(this, level1);
    let pos = {
      x: 0,
      y: 0
    };
    this.gameObjects = [...blocks, this.player];

    console.log("Level successfully built!");
  }

  update(deltaTime)
  {

      this.gameObjects.forEach(object => {
      object.update(deltaTime);});

    
  }

  draw(ctx)
  {
    //console.log("drawing objects...");
    this.gameObjects.forEach(object => {
      object.draw(ctx);
    });
    /*
    if(this.gamestate == GAMESTATE.WIN)
    {
      ctx.fillStyle = "green";
      ctx.fillRect(0,0,320,320);
    }
    */
    
    if(this.gamestate == GAMESTATE.LOSE)
    {
      ctx.fillStyle = "red";
      ctx.fillRect(0,0,320,320);
    }
    
  }
}