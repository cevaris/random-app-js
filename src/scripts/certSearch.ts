require('dotenv').config();
import { program } from 'commander';
import axios from 'axios';

program
    .requiredOption('-s, --spreadsheet <value>', 'spreadheet id')
    .option('-n, --full-name <value>', 'search by name')
    .option('-c, --cert-id <value>', 'search by name');

program.parse(process.argv);

console.log(program.opts());

const baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets/';
const url = `${baseUrl}${program.spreadsheet}/values/Sheet1?key=${process.env.GOOGLE_API_KEY}`;

console.log('querying', url);

type Record = [string, string]

interface Spreadsheet {
    values: Array<Record>
}

function filter(spreadsheet: Spreadsheet): Array<Record> {
    console.log(spreadsheet.values);

    return spreadsheet.values.filter(row => {
        if (row.length == 2) {
            return row[0].includes(program.fullName) || row[1].includes(program.certId);
        } else {
            // malformed row
            return false;
        }
    })
}

axios
    .get<Spreadsheet>(url)
    .then(response => response.data)
    .then(filter)
    .then(results => {
        if (results.length > 0) {
            results.map(record => console.log(record));
        } else {
            console.log('no matches found');
        }
    })
    .catch(error => console.error(error))
    ;