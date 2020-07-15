// 10 ////////// Math Issues //////////

mathCeil = function(number) {
  return number === parseInt(number) ? number : parseInt(number) + 1;
};

mathFloor = function(number) {
  return parseInt(number);
};

mathRound = function(number) {
  // if (number < parseInt(number) + 0.5) 
  //   return parseInt(number)
  // else if (number >= parseInt(number) + 0.5) 
  //   return parseInt(number) + 1;
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number)};

console.log(mathFloor(4.7));
console.log(mathFloor(4.2));
console.log(mathCeil(4.7));
console.log(mathCeil(4.2));
console.log(mathRound(4.2));
console.log(mathRound(4.7));
console.log(mathRound(4.5));
console.log(mathRound(4.49));
console.log(mathRound(5));
















