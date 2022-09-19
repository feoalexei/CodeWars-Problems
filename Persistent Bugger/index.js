// 11 ////////// Persistent Bugger //////////

function persistence(num) {
  let counter = 0;

  num = num.toString();

  while (num.length > 1) {
    num = [...num]
      .map(e => parseInt(e))
      .reduce((a,b) => a * b)
      .toString();

      counter++;
  }  
  return counter;
} 





















