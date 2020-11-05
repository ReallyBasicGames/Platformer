/*
const MYTYPE{
  AIR: 0,
  GROUND: 1,
  LAVA: 2,
  GOAL: 3,
  START: 4
}
*/

function buildLevel(game, level)
{
  console.log("Building level...");
  let blocks = [];
  level.forEach((row, rowIndex)=>
  {
    row.forEach((block, blockIndex) =>
    {
      let position = {
        x: 32*blockIndex,
        y: 32*rowIndex
      };
      switch(block)
      {
        case 0:
          blocks.push(new Block(game, position, BLOCKTYPE.AIR));
          break;
        case 1:
          blocks.push(new Block(game, position, BLOCKTYPE.GROUND));
          break;
        case 2:
          blocks.push(new Block(game, position, BLOCKTYPE.LAVA));
          break;
        case 3:
          blocks.push(new Block(game, position, BLOCKTYPE.GOAL));
          break;
        case 4:
          blocks.push(new Block(game, position, BLOCKTYPE.START));
          break;
        default:
          blocks.push(new Block(game, position, BLOCKTYPE.GROUND));
      };
    });
  });
  console.log("Completed building level!");
  return blocks;
}

const level1 = [ // 10 x 10
  [1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,4,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,2,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,3,1],
  [1,1,1,1,1,1,1,1,1,1]
];