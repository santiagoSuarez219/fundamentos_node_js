# table of contents
- [table of contents](#table-of-contents)
- [Introduccion](#introduccion)
- [Instalación de Node.js](#instalación-de-nodejs)
- [Node: orígenes y filosofía](#node-orígenes-y-filosofía)
- [EventLoop: asíncrona por diseño](#eventloop-asíncrona-por-diseño)
- [Monohilo: implicaciones en diseño y seguridad](#monohilo-implicaciones-en-diseño-y-seguridad)
- [Configurar las variables de entorno en Node.js](#configurar-las-variables-de-entorno-en-nodejs)
- [Herramientas para ser más felices: Nodemon y PM2](#herramientas-para-ser-más-felices-nodemon-y-pm2)
- [Callbacks](#callbacks)
- [Callback Hell: refactorizar o sufrir](#callback-hell-refactorizar-o-sufrir)
- [Promesas](#promesas)
- [Async/await](#asyncawait)
- [Globals](#globals)
- [File system](#file-system)
- [Console](#console)
- [Errores (try / catch)](#errores-try--catch)
- [Procesos hijo](#procesos-hijo)
- [Módulos nativos en C++](#módulos-nativos-en-c)
- [HTTP](#http)
- [OS](#os)
- [Process](#process)
- [Gestión de paquetes: NPM y package.json](#gestión-de-paquetes-npm-y-packagejson)
- [Construyendo módulos: Require e Import](#construyendo-módulos-require-e-import)
- [Modulos utiles](#modulos-utiles)
- [Datos almacenados vs en memoria](#datos-almacenados-vs-en-memoria)
- [Buffers](#buffers)
- [Stream](#stream)
- [Benchmarking (console time y timeEnd)](#benchmarking-console-time-y-timeend)
- [Debugger](#debugger)
- [Error First Callbacks](#error-first-callbacks)
- [Scraping](#scraping)
- [Automatizacion de procesos](#automatizacion-de-procesos)
- [Aplicaciones de escritorio](#aplicaciones-de-escritorio)


# Introduccion 
Descubre qué es Node.js, y por qué es tan potente. Si ya has trabajado con Node.js, vas a profundizar conocimientos sobre cómo funciona por debajo todo el código que ya has hecho.

- Conocer los conceptos básicos de Node.js
- Cómo manejar la asincronía
- Entender los módulos del core
- Utilizar los módulos y paquetes externos

# Instalación de Node.js
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25640-instalacion-de-nodejs/)
[Volver al menu](#table-of-contents)

# Node: orígenes y filosofía
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25184-node-origenes-y-filosofia/)
[Volver al menu](#table-of-contents)

# EventLoop: asíncrona por diseño
1. [Clase]([EventLoop: asíncrona por diseño](https://platzi.com/clases/1759-fundamentos-node/25185-eventloop-asincrona-por-diseno/))
[Volver al menu](#table-of-contents)

# Monohilo: implicaciones en diseño y seguridad
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25187-monohilo-implicaciones-en-diseno-y-seguridad/)
[Volver al menu](#table-of-contents)

# Configurar las variables de entorno en Node.js
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25186-variables-de-entorno/)
[Volver al menu](#table-of-contents)

# Herramientas para ser más felices: Nodemon y PM2
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25188-herramientas-para-ser-mas-felices-nodemon-y-pm2/)
[Volver al menu](#table-of-contents)

# Callbacks
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25189-callbacks/)
2. [Codigo](./callback.js)
[Volver al menu](#table-of-contents)

# Callback Hell: refactorizar o sufrir
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25190-callback-hell-refactorizar-o-sufrir/)
2. [Codigo](/callback_hell.js)
[Volver al menu](#table-of-contents)

# Promesas
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25191-promesas/)
2. [Codigo](/promesas.js)
[Volver al menu](#table-of-contents)

# Async/await
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25192-asyncawait/)
2. [Codigo](/aync_away.js)
[Volver al menu](#table-of-contents)

# Globals
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25193-globals/)
2. [Codigo](/modulos/globales.js)
[Volver al menu](#table-of-contents)

# File system
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25198-file-system/)
2. [Codigo](/modulos/file_system.js)
[Volver al menu](#table-of-contents)

# Console
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25197-console/)
2. [Codigo](./modulos/consola.js)
[Volver al menu](#table-of-contents)

# Errores (try / catch)
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25199-errores-try-catch/)
2. [Codigo](/modulos/errores.js)
[Volver al menu](#table-of-contents)

# Procesos hijo
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25200-procesos-hijo/)
2. [Codigo](./modulos/child-process.js)
[Volver al menu](#table-of-contents)

# Módulos nativos en C++ 
Esta clase no funciono, esta deactualizada
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25201-modulos-nativos-en-c/)
[Volver al menu](#table-of-contents)

# HTTP
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25202-http/)
2. [Codigo](./modulos/http.js)
[Volver al menu](#table-of-contents)

# OS
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25203-os/)
2. [Codigo](./modulos/os.js)
[Volver al menu](#table-of-contents)

# Process
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25204-process/)
2. [Codigo](./modulos/process.js)
[Volver al menu](#table-of-contents)

# Gestión de paquetes: NPM y package.json
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25205-gestion-de-paquetes-npm-y-packagejson/)
[Volver al menu](#table-of-contents)

# Construyendo módulos: Require e Import
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25206-construyendo-modulos-require-e-import/)
2. [Codigo](paquetes/modulo/index.js)
[Volver al menu](#table-of-content)

# Modulos utiles
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25207-modulos-utiles/)
2. [Codigo](paquetes/utils)
[Volver al menu](#table-of-contents)

# Datos almacenados vs en memoria
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25208-datos-almacenados-vs-en-memoria/)
[Volver al menu](#table-of-contents)

# Buffers
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25209-buffers/)
2. [Codigo](memoria/buffer.js)
[Volver al menu](#table-of-contents)

# Stream
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25210-streams/)
2. [Codigo](./memoria/stream.js)
[Volver al menu](#table-of-contents)

# Benchmarking (console time y timeEnd)
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25211-benchmarking-console-time-y-timeend/)
2. [Codigo](./trucos/benchmarking.js)
[Volver al menu](#table-of-contents)

# Debugger
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25212-debugger/)
[Volver al menu](#table-of-contents)

# Error First Callbacks
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25213-error-first-callbacks/)
2. [Codigo](./trucos/error_first.js))
[Volver al menu](#table-of-contents)

# Scraping
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25214-scraping/)
[Volver al menu](#table-of-contents)

# Automatizacion de procesos
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25215-automatizacion-de-procesos/)
[Volver al menu](#table-of-contents)

# Aplicaciones de escritorio
1. [Clase](https://platzi.com/clases/1759-fundamentos-node/25216-aplicaciones-de-escritorio/)
[Volver al menu](#table-of-contents)