const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

// let readableStream = fs.createReadStream(__dirname + '/input.txt');
// ReadableStream.setEncoding('UTF8');
// readableStream.on('data', (chunk) => {
//     console.log(chunk.toString());
//     data += chunk;
// });

// readableStream.on('end', () => {
//     console.log(data);
// });

// Stream de escritura
process.stdout.write('hola')
process.stdout.write('que')
process.stdout.write('tal')

const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

ReadableStream
    .pipe(mayus)
    .pipe(process.stdout);