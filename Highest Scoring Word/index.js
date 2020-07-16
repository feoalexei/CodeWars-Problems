// 12 ////////// Highest Scoring Word //////////

function high(x){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
 
  const arr = x.split(' ').map(word => {
    let sum = 0;
    [...word].forEach(letter => sum += alphabet.indexOf(letter));
    return sum;
  });
  return x.split(' ')[arr.indexOf(Math.max(...arr))];
}

console.log(high('man i need a taxi up to ubud'));























