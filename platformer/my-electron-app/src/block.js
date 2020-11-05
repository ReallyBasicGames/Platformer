const BLOCKTYPE = {
  AIR: 0,
  GROUND: 1,
  LAVA: 2,
  GOAL: 3,
  START: 4
}

class Block
{
  constructor (game, position, typeOfGround)
  {
    
    this.imageGround = document.getElementById("img_ground");
    this.imageGoal = document.getElementById("img_goal");
    this.imageLava = document.getElementById("img_lava");
    this.imageAir = document.getElementById("img_air");
    this.imagePlayer = document.getElementById("img_player");
    this.image;// every object has this
    this.typeOfGround = typeOfGround;
    switch(typeOfGround)
    {
      case BLOCKTYPE.AIR:
      // prevous: this.image = imageAir;
        this.image = document.getElementById("img_air");
        console.log("created air block!");
        break;
      case BLOCKTYPE.GOAL:
        this.image = document.getElementById("img_goal");
         console.log("created goal block!");
        break;
      case BLOCKTYPE.LAVA:
        this.image = document.getElementById("img_lava");
         console.log("created lava block!");
        break;
      case BLOCKTYPE.GROUND:
        this.image = document.getElementById("img_ground");
         console.log("created ground block!");
        break;
      case BLOCKTYPE.START:
        this.image = document.getElementById("img_air");
        game.player.setPos(position);
        break;
    }

    this.velocity = { // every object has this
      x: 0,
      y: 0
    }

    this.game = game;

    this.size = 32; // every object has this

    this.position = position; // every object has this
    
  }

  draw(ctx)
  {
    //console.log("drawing block...");
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    )
  }

  update(deltaTime)
  {
    if(this.typeOfGround == (BLOCKTYPE.GROUND))
    {
      switch(detectCollision(game.player, this))
      {
        case "top":
          game.player.velocity.y = -game.player.gravity;
          console.log("Collided Top!");
          break;
        case "bottom":
          game.player.velocity.y = 0;
          game.player.position.y += 1;
          console.log("Collided Bottom!");
          break;
        case "right":
          game.player.velocity.y = 0;
          game.player.velocity.x = 0;
          game.player.position.x += 1;
          console.log("Collided Right!");
          break;
        case "left":
          game.player.velocity.y = 0;
          game.player.velocity.x = 0;
          game.player.position.x -= 1;
          console.log("Collided Left!");
          break;
        default:
          break;
      }
    }
    if(this.typeOfGround == (BLOCKTYPE.GOAL))
    {
      switch(detectCollision(game.player, this))
      {
        default:
          game.gamestate = GAMESTATE.WIN;
          //console.log("You win!");
          break;
      }
    }
    if(this.typeOfGround == (BLOCKTYPE.LAVA))
    {
      switch(detectCollision(game.player, this))
      {
        default:
          game.gamestate = GAMESTATE.LOSE;
          //console.log("You lose!");
          break;
      }
    }
    /*
    switch(detectCollision(game.player, this))
    {
      case "top":
        game.player.velocity.y = 0;
        game.player.position.y -= 1;
        break;
      case "bottom":
        game.player.velocity.y = 0;
        game.player.position.y += 1;
        break;
      case "right":
        game.player.velocity.x = 0;
        game.player.position.x += 1;
        break;
      case "left":
        game.player.velocity.x = 0;
        game.player.position.x -= 1;
        break;
      default:
        break;
    }
    */
    
  }
}