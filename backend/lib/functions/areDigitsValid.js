function validateDigits(digits) {
    const regex = /^[2-9]+$/;
    return regex.test(digits);
}

export default validateDigits;
