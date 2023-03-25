function hola(nombre, callback){
    setTimeout(function(){
        console.log('Hola, ' + nombre);
        callback(nombre);
    }, 1500);
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log('Bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

function adios(nombre, callback){
    setTimeout(function(){
        console.log('Adios, ' + nombre);
        callback();
    }, 1000);
}

// console.log('Iniciado proceso...');
// hola('Santiago',function(nombre) {
//     hablar(function(){
//         hablar(function(){
//             hablar(function(){
//                 adios(nombre, function() {
//                     console.log('Terminado proceso...')
//                 });
//             });
//         });
//     })
// });

function conversacion(nombre, veces, callback){
    if(veces > 0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

console.log('Iniciado proceso...');
hola('Santiago',function(nombre) {
    conversacion(nombre, 3 , function(){
        console.log('Proceso terminado');
    });
});

