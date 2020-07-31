// 26 ////////// Reverse every other word in the string //////////

function reverse(str){
  return str
    .trim()
    .split(' ')
    .map((word, i) => i % 2 ? [...word].reverse().join('') : word)
    .join(' ')  
}

console.log(reverse("Reverse this string, please!"));
