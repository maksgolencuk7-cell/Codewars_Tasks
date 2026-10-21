function primeFactors(n){
    let result = "";
    let count = 0;

    for (let i = 2; i <= n; i++) {
        count = 0;
        while (n % i === 0) {
            count++;
            n /= i;
        }
        if (count > 0) {
            result += `(${i}${count > 1 ? '**' + count : ''})`;
        }
    }

    return result;
}
