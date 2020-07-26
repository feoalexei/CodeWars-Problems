// 23 ////////// Consonant Value //////////

function solve(s) {
  const cons = s.split(/[aeiou]+/g).filter(Boolean);
  
  const consValues = cons.map(e => [...e].map(letter => letter.charCodeAt() - 96).reduce((a,b) => a + b))

  return Math.max(...consValues);
};

console.log(solve("catchphrase"));


