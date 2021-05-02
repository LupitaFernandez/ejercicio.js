// Requerimos el módulo 'process'
let process = require('process');
let fs= require ('fs');

// Capturamos el comando que el usuario ingresó por consola
let comandoDelUsuario = process.argv[2];

switch(comandoDelUsuario) {
	case 'listar':
    // 1. Obtener listado...
    let listaDeTareas = fs.readFileSync('tareas.json', 'UTF-8');
    // 2. Parsear listado obtenido...
    let listaParseada = JSON.parse(listaDeTareas);
    // 3. Imprimir una por una las tareas...
    listaParseada.forEach(function(elemento, posicion) {
    console.log(`${elemento.titulo} - ${elemento.estado}`);
})
    break;
// También podemos agregar acciones para cuando el usuario no ingresa un comando...
case undefined:
console.log('Tenés que pasarme una acción');
break;
// O para cuando pone una accion que no tenemos registrada...
default:
    console.log('No entiendo qué me estás pidiendo :(');
}

