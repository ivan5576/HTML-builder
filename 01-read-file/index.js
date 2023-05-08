const fs = require('fs');
const path = require('node:path');
const dir = path.dirname('01-read-file/text.txt')
const file = path.join(dir, 'text.txt')

fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
