import http from 'http';

interface Word {
    word: string
    definition: string
}

export const dictionary: Word[] = [];

http.get("http://s3.amazonaws.com/miscs.random/dictionary.sample.csv", function (response: any) {
    let dictionaryData = '';
    console.log(`statusCode: ${response.statusCode}`)

    response.on('data', (data: string) => {
        dictionaryData += data;
        console.log(`got the data ${data.length}`)
    })

    response.on('end', (error: Error) => {
        console.error(error);
    })

    response.on('end', () => {
        console.log(`completed reading ${dictionaryData.length}`);

        const lines = dictionaryData.split('\n');
        lines.forEach(line => {
            const csvData = line.split(',');

            if (csvData[0] && csvData[2]) {
                dictionary.push({
                    word: csvData[0].replace(/"|\r/g, ''),
                    definition: csvData[2].replace(/"|\r/g, '')
                });
            }
        });
    })
});