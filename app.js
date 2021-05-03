// Requerimos el módulo 'process'
let process = require('process');
let fs= require ('fs');
let moduloTareas = require ('./modulos/moduloTareas')

// Capturamos el comando que el usuario ingresó por consola
let comandoDelUsuario = process.argv[2];

switch(comandoDelUsuario) {
	case 'listar':
        let listaParseada =moduloTareas.traerArrayDeTareas ();
    listaParseada.forEach (function (elemento, posicion){
        console.log(`${elemento.titulo} - ${elemento.estado}`);
   
})
    break;

    case 'crearTarea':
        let tituloObtenido = process.argv [3]
        let nuevaTarea = {
            titulo: tituloObtenido,
            estado: "terminada"
        }
        moduloTareas.crearNuevaTarea (nuevaTarea);
        console.log ('Tarea creada con éxito')

        break;

    case 'leerPorEstado':
        let estadoEnProceso = process.argv [4]
        moduloTareas.leerPorEstado ('terminada')
      console.log (`${elemento.titulo} - ${elemento.estado}`)
        
        break;
        

        // También podemos agregar acciones para cuando el usuario no ingresa un comando...
    case undefined:
    console.log('Tenés que pasarme una acción');
    break;



    // O para cuando pone una accion que no tenemos registrada...
    default:
    console.log('No entiendo qué me estás pidiendo :(');
}
