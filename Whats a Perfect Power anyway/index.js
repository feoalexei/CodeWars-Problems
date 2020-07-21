// 19 ////////// What's a Perfect Power anyway //////////

var isPP = function(n){
  for (let m = 2; m <= n; m++) {
    for (let k = 2; k <= n; k++) {
      if (Math.pow(m, k) === n) return [m, k];
    }
  }
  return null;
}

// var isPP = function(n){
  //   let arr = [];
  //   let res = [];
  //   let i = 0;
  //   while (i < n) {
  //     arr.push(i+1); 
  //     i++;
  //   }
  //   for (let m = 0; m < arr.length-1; m++) {
  //     for (let k = 0; k < arr.length-1; k++) {
  //       if (Math.pow(arr[m], arr[k]) === n) 
  //         res.push(arr[m], arr[k]); 
  //     } 
  //   }
  //   return res.length ? res.slice(0,2) : null; 
  // }
 
  

console.log(isPP(81));


