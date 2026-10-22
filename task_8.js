function expandedForm(num) {
 let str = num.toString();
    let result = [];

    for (let i = 0; i < str.length; i++) {
        let digit = str[i];
        
        if (digit !== '0') {
            let zeros = str.length - i - 1;
            let value = digit + "0".repeat(zeros);
            result.push(value);
        }
    }

    return result.join(" + ");
}
