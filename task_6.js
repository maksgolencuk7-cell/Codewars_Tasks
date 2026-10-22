function toWeirdCase(string){
let words = string.split(' ');
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let weirdWord = "";

        for (let j = 0; j < word.length; j++) {
            if (j % 2 === 0) {
                weirdWord += word[j].toUpperCase();
            } else {
                weirdWord += word[j].toLowerCase();
            }
        }

        result.push(weirdWord);
    }

    return result.join(' ');
}
