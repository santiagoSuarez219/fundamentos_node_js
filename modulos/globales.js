// console.log(global);
let i = 0;
let intervalo = setInterval(function() {
    if (i === 3) {
        clearInterval(intervalo)
    } 
    i++;
    console.log('Hola mundo');
},1000);

setImmediate(function() {
    console.log('Hola mundo');
});

// console.log(process);
// console.log(__dirname);
//console.log(__filename);