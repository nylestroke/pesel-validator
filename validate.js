import {convertMonth, convertYear} from "./utils/date-convertor.js";
import {isEven} from "./utils/num-utils.js";

import prompt_sync from "prompt-sync";
import {validateControlNumber} from "./helper.js";
const prompt = prompt_sync({});

// Check PESEL number
function validatePesel(pesel) {
    // Stringify pesel
    const stringifier = pesel.toString();

    // Check for pesel length
    if (stringifier.length !== 11 || !validateControlNumber(stringifier).isValid) {
        console.error('Invalid pesel number specified!');
        return;
    }

    // Check date of birth
    const year = stringifier.slice(0, 2);
    const month = stringifier.slice(2, 4);
    const day = stringifier.slice(4, 6);
    console.log(`Date of birth: ${day} ${convertMonth(month)} ${convertYear(month, year)}`)

    // Serial number of PESEL
    const serialNumber = stringifier.slice(6, 10);
    console.log(`Serial number: ${serialNumber}`);

    // Check sex
    const isFemale = isEven(Number(pesel.toString().slice(9, 10)));
    console.log(`Sex: ${isFemale ? 'Female' : 'Male'}`);

    // Control number
    console.log(`Is PESEL correct? - ${validateControlNumber(stringifier).isValid}`);
}

const pesel = prompt('Specify PESEL number: ');
validatePesel(pesel);