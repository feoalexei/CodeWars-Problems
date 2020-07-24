// 22 ////////// Two Beggars And Gold //////////

function distributionOf(golds){
  let A = 0; 
      B = 0;
  let turn = 1;

  while (golds.length > 0) {
    if (golds[0] >= golds[golds.length - 1]) {
      turn ? A += golds.shift() : B += golds.shift();
    } else {
      turn ? A += golds.pop() : B += golds.pop();
    }
    turn = !turn;  
  }
  return [A, B];
}



console.log(distributionOf([4,2,9,5,2,7]));


