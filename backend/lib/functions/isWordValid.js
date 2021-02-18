function validateWord(word) {
    const regex = /^[a-z]+$/;
    return regex.test(word);
}

export default validateWord;