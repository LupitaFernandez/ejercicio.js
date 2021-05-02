let process = require('process');
let fs = require('fs');

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
    case 'crearTarea':
	// 1.
	let tituloObtenido = process.argv[3]
	// 2.
	let nuevaTarea = {
		titulo: tituloObtenido,
    estado: "terminada"
	}
	// 3.
	let listaDeTareas2 = fs.readFileSync('tareas.json', 'UTF-8');
	// 4.
	let listaParseada2 = JSON.parse(listaDeTareas2)	;
	// 5.
	listaParseada2.push(nuevaTarea)
	// 6.
	let listaComoJSON = JSON.stringify(listaParseada2);
	fs.writeFileSync('tareas.json', listaComoJSON)
	// Por último, podriamos darle un mensaje de exito...
	console.log("La tarea fue creada con éxito")
	
		break;
	// O para cuando pone una accion que no tenemos registrada...
  default:
			console.log('No entiendo qué me estás pidiendo :(');
}




console.log ('Hola, mundo !')