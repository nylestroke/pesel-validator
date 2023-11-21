// Validate control number in PESEL
function validateControlNumber(pesel) {
    const number = pesel.length === 11 ? pesel.toString().slice(0, 10) : pesel.toString();
    const weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 1];

    let validated = 0;
    for (let i = 0; i < number.length; i++) {
        validated += number[i] * weight[i];
    }

    return {
        isValid: validated % 10 === Number(pesel.toString().slice(10, 11)),
        controlNumber: validated % 10
    };
}

export {
    validateControlNumber
}