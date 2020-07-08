// 3 //////////  Delete occurrences of an element if it occurs more than n times //////////

function deleteNth(arr,n){
  const output = [];
  arr.forEach(inp => {
    if (!output.includes(inp) || output.filter(out => out === inp).length < n) {
      output.push(inp);
    }
  });
  return output;
}

console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));









