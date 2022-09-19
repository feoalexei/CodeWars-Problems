// 10 ////////// Math Issues //////////

mathCeil = function(number) {
  return number === parseInt(number) ? number : parseInt(number) + 1;
};

mathFloor = function(number) {
  return parseInt(number);
};

mathRound = function(number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number)};


















