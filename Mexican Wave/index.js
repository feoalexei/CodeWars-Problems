// 27 ////////// Mexican Wave //////////

function wave(str){
  const output = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    output.push(str.slice(0, i) +  str[i].toUpperCase() + str.slice(i+1))
  }
  return output
}

console.log(wave("hello"));
