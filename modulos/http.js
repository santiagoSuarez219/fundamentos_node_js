const http = require('http');

http.createServer(router).listen(3000);

function router(req, res){
    console.log('nueva peticion');
    console.log(req.url);

    switch (req.url){
        case '/hola':
            res.write('Hola, que tal');
            res.end();
            break;
        default:
            res.write('Error 404: No se lo que quieres');
            res.end()
    }

//     res.writeHead(201, {'Content-Type': 'text/plain'})
//     // Escribir respuesta al usuario
//     res.write('Hola, ya se usar http de nodejs');

//     res.end();
}

console.log('Escuchando http en el puerto 3000');

// Puertos mas corrientes 3000, 3001 ....
// 8080,8081 ...8080 puerto por defecto http



