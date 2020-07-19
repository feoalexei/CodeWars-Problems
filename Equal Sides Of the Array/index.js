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

// const arr = [1,2,3,4,3,2,1];
// const arrZero = [20,10,-80,10,10,15,35];
// let index = '';

// for (let i = 1; i < arrZero.length; i++) {
//     if (!(arrZero.slice(i+1).reduce((a,c) => a + c))) index = i - 1;
// }

// console.log(index);























