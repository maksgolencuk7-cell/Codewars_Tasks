function expandedForm(num) {
 let strNum = num.toString();
    let result = [];
    let len = strNum.length;

    for (let i = 0; i < len; i++) {
        let digit = strNum[i];
        
        if (digit !== '0') {
            let value = digit * Math.pow(10, len - i - 1);
            result.push(value);
        }
    }

    return result.join(' + ');
}
