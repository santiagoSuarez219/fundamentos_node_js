
process.on('beforeExit', ()=> {
    console.log('El proceso va terminar');
});

process.on('exit', ()=> {
    console.log('El proceso terminó');
    setTimeout(() => {
        console.log('Esto no se muestra nunca');
    }, 0);
});

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    console.error(err);
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
});

funcionQueNoExiste();
console.log('Sera que esto sale');

