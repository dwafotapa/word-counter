function wordCounter(text, minLength) {
    const words = text.toLowerCase().split(/[^\u0041-\u005A\u0061-\u007A\u00C0-\u00FF\u0400-\u04FF\u0500-\u052F]/);
    const wordCounts = words.reduce((accumulator, word) => {
        if (!word || word.length < minLength) {
            return accumulator;
        }

        const hash = { ...accumulator };
        hash[word] = (hash[word] || 0) + 1;
        return hash;
    }, {});
    return wordCounts;
}

module.exports = wordCounter;