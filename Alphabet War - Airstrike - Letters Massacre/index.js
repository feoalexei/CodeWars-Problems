// 28 ////////// Alphabet war - airstrike - letters massacre //////////

function alphabetWar(fight) {
  const leftMap = { w: 4, p: 3, b: 2, s: 1 };
  const rightMap = { m: 4, q: 3, d: 2, z: 1 };
  let left = {};
  let right = {};

  const exploded = fight.replace(/\w?\*+\w?/g, "");

  for (let e of exploded) {
    if (e in leftMap) {
      if (!left[e]) left[e] = 0;
      left[e] += leftMap[e];
    } else if (e in rightMap) {
      if (!right[e]) right[e] = 0;
      right[e] += rightMap[e];
    }
  }

  const sum = (obj) => Object.values(obj).reduce((a, b) => a + b, 0);

  return sum(left) === sum(right)
    ? "Let's fight again!"
    : sum(left) > sum(right)
      ? "Left side wins!"
      : "Right side wins!";
}

console.log(alphabetWar("zdqmwpbzs"));
