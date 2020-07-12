// 8 ////////// Kebabize //////////

function kebabize(str) {
  let output = '';
  output = str.replace(/[^a-z]/ig, '')
  .replace(/./, c => c.toLowerCase())
  .replace(/[A-Z]/g, c => '-' + c.toLowerCase());
  return output;
}

console.log(kebabize('MyCamelHas3Humps'));














