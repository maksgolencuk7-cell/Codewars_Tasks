function hasTwoCubeSums(n) {
	let firstA = 0;
    let firstB = 0;

    for (let a = 1; a * a * a < n; a++) {
        for (let b = a + 1; a * a * a + b * b * b <= n; b++) {
            if (a * a * a + b * b * b === n) {
                if (firstA === 0) {
                    firstA = a;
                    firstB = b;
                } else if (a !== firstA && a !== firstB && b !== firstA && b !== firstB) {
                    return true;
                }
            }
        }
    }

    return false;
}
    
