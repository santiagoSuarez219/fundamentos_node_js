function otraFuncion(){
    serompe();
}

function serompe() {
    return 3 + z;
}

function seRompeAsincrona(){
    setTimeout(function(){
        try {
            return 3 + z;
        } catch(err){
            console.error('Error en mi funcion asincrona');
            console.error(err.message);
        }
    });
}

try{
    //otraFuncion();
    seRompeAsincrona();
} catch(err){
    console.error('Vaya, algo se ha roto...');
    console.error(err.message);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('Esto esta al final');