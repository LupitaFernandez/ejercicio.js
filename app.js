// Requerimos el módulo 'process'
let process = require('process');
let fs= require ('fs');
let moduloTareas = require ('./modulos/moduloTareas');

// Capturamos el comando que el usuario ingresó por consola
let comandoDelUsuario = process.argv[2];




switch(comandoDelUsuario) {
    //Case: listar                              
	case 'listar':
        let listaParseada =moduloTareas.traerArrayDeTareas (); //Obtener listado
    listaParseada.forEach (function (elemento, posicion){ //Parsear listado obtenido
        console.log(`${elemento.titulo} - ${elemento.estado}`); //Imprimir una por una las tareas
   
})
    break;


    case 'agregar':
        let nuevoTitulo = process.argv[3];
        if (nuevoTitulo == undefined){
            console.log("Tenes que escribir un titulo");
            break;
            
        }
        let nuevaTarea = {
            titulo: nuevoTitulo,
            estado: "pendiente"
        }

        moduloTareas.escribirJSON(nuevaTarea);
            console.log("Tu tarea ha sido añadida");
            
            break;


        //Case 'filtrar'
        case "filtrar": 
        var estado = process.argv[3]; 
        if (estado == undefined){ //Si el usuario no escribe ningún estado muestro en consola un mensaje de error
            console.log("Tenes que filtrar por algo");
            break;
        }
        let listaFiltrada = moduloTareas.filtrarJSON(estado); 
        listaFiltrada.forEach(function(tarea){ //Recibe por parametro (tarea) 
            console.log(tarea.titulo + " - " + tarea.estado) //Muestra por consola cada titulo y el estado
        })
        break;



        //Case 'cambiar'
    case "cambiar": 
        var estado = process.argv[3]; 
        var nuevoEstado = process.argv[4]; //Tomo el nuevo estado de la quinta posición del array 
        moduloTareas.cambiarEstado(estado,nuevoEstado) //Ejecuto el método 'cambiarEstado' del 'moduloTareas'. Le paso dos parámetros: el estado que quiero cambiar y el nuevo estado.

            console.log("Se realizaron todos los cambios");
        
        break;


        // También podemos agregar acciones para cuando el usuario no ingresa un comando...
    case undefined:
    console.log('Tenés que pasarme una acción');
    break;



    // O para cuando pone una accion que no tenemos registrada...
    default:
    console.log('No entiendo qué me estás pidiendo :(');
}
