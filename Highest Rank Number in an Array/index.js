// 9 ////////// Highest Rank Number in an Array //////////

function highestRank(arr){
  let obj = {};
  arr.forEach(x => {
    obj[x] = obj[x] ? obj[x] + 1 : 1;
  });

  let maxFreq = 0, highestNum;

  Object.keys(obj).forEach(x => {
    if (obj[x] >= maxFreq) {
      maxFreq = obj[x];
      highestNum = x;
    }
  })
  return +highestNum;
}

console.log(highestRank([12, 10, 8, 7, 6, 4, 10, 10, 12]));
















