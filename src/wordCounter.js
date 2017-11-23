function wordCounter(text, minLength) {
    const words = text.split(/[\d\s.,;:!\?\-_=+'"@£$%\^&\*()€#\/]/);
    const wordCounts = words.reduce((hash, word) => {
        if (word && word.length >= minLength) {
            word = word.toLowerCase();
            hash[word] = (hash[word] || 0) + 1;
        }
        return hash;
    }, {});
    return wordCounts;
}

module.exports = wordCounter;
