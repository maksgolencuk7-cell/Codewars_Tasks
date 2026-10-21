function longest(arr, n) {
let indexedArr = arr.map((str, index) => ({ str, index }));
    
    indexedArr.sort((a, b) => {
        if (b.str.length === a.str.length) {
            return a.index - b.index;
        }
        return b.str.length - a.str.length;
    });
    
    return indexedArr[n - 1].str;
}
