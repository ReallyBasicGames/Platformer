// this function detects collisions between 2 objects.
//
// NOTE: BOTH objects have the following variables:
// - size (1 param)
// - position (x & y params)
// 
// returns gameObject1 position relative to gameObject2
function detectCollision(gameObject1, gameObject2)
{
  //TO-DO: make this collision function check for specific directions, not horiz and vert
  
  //check left X movment
  if(gameObject1.position.x + gameObject1.position.size + gameObject1.velocity.x > gameObject2.position.x + gameObject2.velocity.x &&
  gameObject1.position.y + gameObject1.size + gameObject1.velocity.y > gameObject2.position.y + gameObject2.velocity.y &&
  gameObject1.position.y + gameObject1.velocity.y < gameObject2.position.y + gameObject2.size + gameObject2.velocity.y)
  {
    return "left";
  }
  //check right X movment
  if(gameObject1.position.x + gameObject1.velocity.x < gameObject2.position.x + gameObject2.velocity.x + gameObject2.size &&
  gameObject1.position.y + gameObject1.size + gameObject1.velocity.y > gameObject2.position.y + gameObject2.velocity.y &&
  gameObject1.position.y + gameObject1.velocity.y < gameObject2.position.y + gameObject2.size + gameObject2.velocity.y)
  {
    return "right";
  }

  // check top y movement
  if(gameObject1.position.x + gameObject1.size + gameObject1.velocity.x > gameObject2.position.x + gameObject2.velocity.x &&
  gameObject1.position.x  + gameObject1.velocity.x < gameObject2.position.x + gameObject2.size + gameObject2.velocity.x &&
  gameObject1.position.y + gameObject1.size + gameObject1.velocity.y > gameObject2.position.y + gameObject2.velocity.y)
  {
    return "top";
  }

  // check bottom y movement
  if(gameObject1.position.x + gameObject1.size > gameObject2.position.x + gameObject2.velocity.x &&
  gameObject1.position.x < gameObject2.position.x + gameObject2.size + gameObject2.velocity.x &&
  gameObject1.position.y + gameObject1.velocity.y < gameObject2.position.y + gameObject2.size + gameObject2.velocity.y)
  {
    return "bottom";
  }
}