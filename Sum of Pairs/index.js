// 14 ////////// Sum of Pairs //////////

const sum_pairs = function(ints, s) {
    const appearSet = new Set();
    for (let int of ints) {
        if (appearSet.has(s - int)) return [s - int, int];
        appearSet.add(int);        
    }
}

console.log(sum_pairs([10, 5, 2, 3, 7, 5], 10));























