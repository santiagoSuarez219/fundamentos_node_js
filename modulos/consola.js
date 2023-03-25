console.log('Algo')
console.info('Algo')
console.error('Algo')
console.warn('Algo')

var tabla = [
    {a:1,
    b:'Z'},
    {a:2,
    b:'Otra'}
]
console.log(tabla);
console.table()

console.group('Conversacion:')
console.log('Hola')
console.group('bla')
console.log('Blablabla')
console.log('Blablabla')
console.log('Blablabla')
console.groupEnd('bla')
console.log('Adios');
console.groupEnd('Conversacion')

function function1(){
    console.group('funcion 1');
    console.log('Esto es de la funcion 1');
    console.log('Esto tambien ');
    function2();
    console.groupEnd('funcion 1');
}

function function2(){
    console.group('funcion 2');
    console.log('Ahora estamos en la funcion 2');
    console.groupEnd('funcion 2');
}

console.log('empezamos');
function1();

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');

