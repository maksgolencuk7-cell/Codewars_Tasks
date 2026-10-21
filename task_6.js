function toWeirdCase(string){
return string.split(' ').map(word => {
        let weirdWord = '';
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                weirdWord += word[i].toUpperCase();
            } else {
                weirdWord += word[i].toLowerCase();
            }
        }
        return weirdWord;
    }).join(' ');
}
