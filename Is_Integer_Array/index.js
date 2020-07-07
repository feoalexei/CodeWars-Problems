// 3 //////////  Is Integer Array? //////////

function isIntArray(arr) {
    return !!arr && arr.every( e => Number.isInteger(e));
  }

console.log(isIntArray([1, 2, 3, 4]));








