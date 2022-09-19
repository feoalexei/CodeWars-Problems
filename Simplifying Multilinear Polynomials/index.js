// 29 ////////// Simplifying Multilinear Polynomials //////////

function simplify(poly){
  let polyArr = poly.match(/[+-]?\d*[a-z]*/g).filter(Boolean);
  console.log(polyArr);
  let obj = {};

  let polySorted = polyArr.map(item => item.split('').sort());

  polySorted.map(arr => (arr[0] === '+' || arr[0] === '-') ? arr : arr.unshift('+'));

  // polySorted.map(arr => {
  //   let sign = arr.splice(0,1);
  //   let resArr = arr.reduce((a,b) => a + b);
  //   console.log(arr.push(sign, resArr));
   

   
  // })
  console.log(polySorted);

  

  for (let arr of polySorted) {
    let sign = arr.splice(0,1);
    console.log(sign.concat(arr));

    // arr = arr.reduce((a,b) => a + b)
    // arr = [sign.join(''), arr];
 
    // arr = [...sign.split(''), arr.join('')];
    // console.log(arr);
    
  }

  
 
  


}
console.log(simplify('3x-yx+2xy-x'));
