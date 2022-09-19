// 16 ////////// Equal Sides Of An Array //////////

function findEvenIndex(arr){
    for (let i = 0; i < arr.length; i++) {
        let left = arr.slice(0, i).reduce((a,c) => a + c, 0);
        let right = arr.slice(i + 1).reduce((a,c) => a + c, 0);
        if (right === left) return i;
    }
    return -1; 
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));
























