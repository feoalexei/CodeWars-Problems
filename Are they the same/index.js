// 37 ////////// Are they the "same"? //////////

function comp(arr1, arr2) {
  if (arr1 == null || arr2 == null) return false;

  arr1Squared = arr1.sort((a, b) => a - b).map((e) => e * e);
  arr2.sort((a, b) => a - b);

  return JSON.stringify(arr1Squared) == JSON.stringify(arr2);
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
