function isCircleSorted( arr ){
let drops = 0;
    let len = arr.length;
    
    for (let i = 0; i < len; i++) {
        let current = arr[i];
        let next = arr[(i + 1) % len];
        
        if (current > next) {
            drops++;
        }
    }
    
    return drops === 1 || drops === 0;
}
