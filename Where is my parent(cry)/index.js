// 21 ////////// Where is my parent!?(cry) //////////

function findChildren(dancingBrigade){
  const arr = [...dancingBrigade].sort();
  const families = new Map();
  
  for (let letter of arr) {
    let big = letter.toUpperCase();
    if (families.has(big)) {
      families.get(big).push(letter);
    } else {
      families.set(big, []);
      families.get(big).push(letter);
    }
  }
  return [...families.values()]
            .reduce((a,c) => a.concat(c))
            .join();
};

// function findChildren(dancingBrigade){
//   return dancingBrigade.toLowerCase()
//                        .split('')
//                        .sort()
//                        .map((v,i,a)=>{ return (i === 0 || v !== a[i-1]) ? v.toUpperCase() : v;})
//                        .join('');
// };

console.log(findChildren("aAbaBb"));


