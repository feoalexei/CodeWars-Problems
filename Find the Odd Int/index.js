// 24 ////////// Find the Odd Int //////////

function findOdd(A) {
  let obj = {};
  for (const num of A) {
    obj[num] ? obj[num]++ : obj[num] = 1;
  }

  for (const [key,value] of Object.entries(obj)) {
    if (value % 2) return +key;
  }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
