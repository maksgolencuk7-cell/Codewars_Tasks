function isCircleSorted( arr ){
let drops = 0;
    let len = arr.length;
    
    for (let i = 0; i < len; i++) {
        if (arr[i] > arr[(i + 1) % len]) {
            drops++;
        }
    }
    
    return drops === 1 || drops === 0;
}
