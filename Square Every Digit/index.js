//////////// Square Every digit //////////

function squareDigits(num) {
  return +num
    .toString()
    .split('')
    .map((e) => Math.pow(+e, 2))
    .join('');
}

console.log(squareDigits(9119));
