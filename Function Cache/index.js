// 13 ////////// Function Cache //////////

function cache(func) {
  let cacheObj = {};
  
  return function() {
    let key = JSON.stringify(arguments);
    console.log(key);
    console.log(arguments);
    if (!(key in cacheObj)) {
      cacheObj[key] = func.apply(null, arguments);
    }
    return cacheObj[key];
  };
}

























