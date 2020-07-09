// 6 //////////  Data Reverse //////////

function dataReverse(data) {
  let output = [];
  for (let i = 0; i < data.length; i += 8) {
    output.push(data.slice(i,i+8));
  }
  return output.reverse().reduce((a,c) => a.concat(c), []); 
}
console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));











