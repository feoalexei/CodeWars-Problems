// 34 /////////// Beginner Series #3 Sum of Numbers //////////

function getSum(a,b){
  if (a===b) return a;

  let sum = 0;
      min = a < b ? a : b;
      max = a < b ? b : a;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

console.log(getSum(3, 1));