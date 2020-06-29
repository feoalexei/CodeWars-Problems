// 1 //////////  Sort Arrays (Ignoring Case) //////////

sortme = function( names ){
     let sorted = names.sort((a,b) => a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1);
     return sorted;
}

console.log(sortme(["Hello", "there", "I'm", "fine"]));







