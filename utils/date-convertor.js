// Convert pesel year to natural one (indicated by month)
function convertYear(month, year) {
    const century = Math.floor(month / 20);
    switch (century) {
        case 4: return `18${year}`;
        case 3: return `22${year}`;
        case 2: return `21${year}`;
        case 1: return `20${year}`;
        case 0: return `19${year}`;
        default: throw new Error('Invalid year specified!');
    }
}

// Convert month number to name
function convertMonth(monthNumber) {
    const number = monthNumber % 20;
    switch (number) {
        case 1: return 'January';
        case 2: return 'February';
        case 3: return 'March';
        case 4: return 'April';
        case 5: return 'May';
        case 6: return 'June';
        case 7: return 'July';
        case 8: return 'August';
        case 9: return 'September';
        case 10: return 'October';
        case 11: return 'November';
        case 12: return 'December';
        default: throw new Error('Incorrect month number specified!');
    }
}

export {
    convertMonth,
    convertYear
}