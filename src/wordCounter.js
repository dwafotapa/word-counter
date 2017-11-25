function wordCounter(text, minLength) {
    const words = text.split(/[\d\s.,;:!?\-_=+'"@£$%^&*()€#/]/);
    const wordCounts = words.reduce((accumulator, currentValue) => {
        const hash = accumulator;
        const word = currentValue.toLowerCase();
        if (word && word.length >= minLength) {
            hash[word] = (hash[word] || 0) + 1;
        }
        return hash;
    }, {});
    return wordCounts;
}

module.exports = wordCounter;
