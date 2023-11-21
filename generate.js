import prompt_sync from "prompt-sync";
import {validateControlNumber} from "./helper.js";

const prompt = prompt_sync({});

// Generate valid month number for pesel
function generateMonthNumber(year, month) {
    if (year < 1900) month += 80;
    else if (year < 2000) month += 0;
    else if (year < 2100) month += 20;
    else if (year < 2200) month += 40;
    else if (year < 2300) month += 60;
    else {
        console.error('Invalid month number specified!');
        return;
    }

    return Number(month);
}

// Generate number by provided sex
function generateSexNumber(sex) {
    switch(sex.toString().toLowerCase()) {
        case 'female': return Math.floor(Math.random() * 5) * 2;
        case 'male': return Math.floor(Math.random() * 5) * 2 + 1;
        default: {
            console.error('Invalid sex provided!');
            return;
        }
    }
}

// Generate pesel
function generatePesel(day, month, year, sex) {
    const serialNumber = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    let pesel = `${year.toString().slice(2, 4)}${generateMonthNumber(year, month)}${day}${serialNumber}${generateSexNumber(sex)}`;
    const validated = validateControlNumber(pesel);
    pesel += validated.controlNumber;

    console.log(`Generated PESEL: ${pesel}`);
}

const day = prompt('Day of birth: ');
const month = prompt('Month of birth (number): ');
const year = prompt('Year of birth: ');
const sex = prompt('Your SEX (Female, Male): ');
generatePesel(Number(day), Number(month), Number(year), sex);