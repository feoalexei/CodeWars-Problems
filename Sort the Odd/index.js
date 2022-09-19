// 7 ////////// Sort the Odd //////////

function sortArray(array) {
  const oddSorted = array
    .filter(e => e % 2)
    .sort();
  return array.map(e => e % 2 ? oddSorted.shift() : e);
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));












