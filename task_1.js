function hasTwoCubeSums(n) {
    const pairs = [];
    const maxVal = Math.floor(Math.cbrt(n)) + 1;

    for (let a = 1; a <= maxVal; a++) {
        for (let b = a + 1; b <= maxVal; b++) {
            if ((a * a * a) + (b * b * b) === n) {
                pairs.push([a, b]);
            }
        }
    }

    if (pairs.length < 2) return false;

    for (let i = 0; i < pairs.length; i++) {
        for (let j = i + 1; j < pairs.length; j++) {
            const pair1 = pairs[i];
            const pair2 = pairs[j];
            
            const allNums = [pair1[0], pair1[1], pair2[0], pair2[1]];
            const uniqueNums = new Set(allNums);
            
            if (uniqueNums.size === 4) {
                return true;
            }
        }
    }

    return false;
}
