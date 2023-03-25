// function soyAsincrona(){
//     console.log('Hola, soy una función asíncrona');
//     setTimeout(function(){
//         console.log('Estoy siendo asíncrona');
//     }, 1000);
// }

// console.log('Iniciado proceso...');
// soyAsincrona();
// console.log('Terminando proceso...');

// function soyAsincrona(callback){
//     console.log('Hola, soy una función asíncrona');
//     setTimeout(function(){
//         console.log('Estoy siendo asíncrona');
//         callback();
//     }, 1000);
// }

// console.log('Iniciado proceso...');
// soyAsincrona(function() {
//     console.log('Terminado proceso...');
// });

function hola(nombre, callback){
    setTimeout(function(){
        console.log('Hola, ' + nombre);
        callback(nombre);
    }, 1500);
}

function adios(nombre, callback){
    setTimeout(function(){
        console.log('Adios, ' + nombre);
        callback();
    }, 1000);
}


console.log('Iniciado proceso...');
hola('Santiago',function(nombre) {
    adios(nombre, function() {
        console.log('Terminado proceso...')
    });
});

// hola('Santiago', function(){})
// adios('Santiago', function(){})

