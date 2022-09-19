// 4 //////////  Lowest product of 4 consecutive numbers //////////

function lowestProduct(input) { 
  const allProducts = [];
  let product = 0;
  for (let i = 0; i < input.length; i++) {
    const four = [...input].slice(i,i+4);
    if (four.length === 4) 
      product = four.reduce((a,c) => a*c);
      allProducts.push(product);
    }  
   return input.length >= 4 ? Math.min(...allProducts) : "Number is too small"
}

console.log(lowestProduct("2345611117899"));










