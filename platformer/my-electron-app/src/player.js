class Player {
  constructor(game)
  {
    // player image // every object has this
    this.image = document.getElementById("img_player");

    // size should be a little smaller than the other blocks
    this.size = 16; // every object has this

    // created with position // every object has this
    this.position = {
      x: 0,
      y: 0
    };

    // player's current velocity
    this.velocity = { // every object has this
      x: 0,
      y: 0
    };

    this.acceleration = {
      x: 1, // moving left to right
      y: 3 // jump speed, should be large compared to horizontal
    };

    // max speed player can travel
    this.maxSpeed = {
      x: 3,
      y: 7
    };

    this.gravity = 0.05;

    this.friction = 1.1; // stopping speed
    this.onGround = false;
  }

  update(deltaTime)
  {
    this.velocity.y += this.gravity;
    this.velocity.x /= this.friction;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    //console.log("player v = " + this.velocity.x + " , " + this.velocity.y);
  }

  draw(ctx)
  {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  setPos(position) // initialize the player position 
  {
    console.log("Set player position!");
    this.position = position;
  }

  left()
  {
    if(this.velocity.x >= -this.maxSpeed.x) 
    {
      this.velocity.x -= this.acceleration.x;
    }
  }

  right()
  {
    if(this.velocity.x <= this.maxSpeed.x)
    {
      this.velocity.x += this.acceleration.x;
    }
  }

  jump()
  {
    this.velocity.y -= this.acceleration.y;
  }
  
}