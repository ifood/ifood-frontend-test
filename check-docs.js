const fs = require('fs');

let messageError = '';
if (!fs.existsSync('out')) messageError = 'Run `npm run export` before push';

if (messageError) console.error('\x1b[31m' + messageError + '\x1b[0m\n');
process.exit(messageError === '' ? 0 : 1);
