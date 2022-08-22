const fs = require('fs')

const readStream = fs.createReadStream('./streamdata.txt', { encoding: 'utf8' })
const writeStream = fs.createWriteStream('./newstreamdata.txt', { encoding: 'utf8'})

// readStream.on('data', (chunk) => {
//     console.log('-------------------------------- NEW CHUNK --------------------------------');
//     console.log('chunck', chunk);
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk)
// })

readStream.pipe(writeStream)

