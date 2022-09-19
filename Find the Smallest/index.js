// 28 ////////// Find the Smallest //////////

function smallest(n) {
  const arr = [...n.toString()].map(Number);
  const min = Math.min(...arr);
  const indCut = arr.indexOf(min);
  let indPaste = 0;


  if (min < arr[0]) {
    arr.unshift(arr.splice(arr.indexOf(min),1));
    indPaste = 0;
  } else {
    arr.splice(1,1, arr.splice(arr.indexOf(min),1));
    indPaste = 1;
  }
  
  return [+arr.reduce((a,b) => a.concat(b), []).join(''), indCut, indPaste];
}



console.log(smallest(261235));


