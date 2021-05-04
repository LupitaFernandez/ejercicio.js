let fs = require('fs')

let moduloTareas = {
    archivo: './tareas.json',
    leerJSON: function() {
        let listaDeTareas = fs.readFileSync(this.archivo, 'utf-8');
        let tareas = JSON.parse(listaDeTareas);
        return tareas
    },
    escribirJSON: function(nuevaTarea) {
        let tareasAnteriores = this.leerJSON();
        tareasAnteriores.push(nuevaTarea);
        let tareasActualizadas = JSON.stringify(tareasAnteriores);
        fs.writeFileSync(this.archivo, tareasActualizadas, 'utf-8')
    },
    filtrarJSON:function(estado){ 
        let listaDeTareas = this.leerJSON(); //Traer el json parseado
        let listaFiltrada = listaDeTareas.filter(function(tarea){ //Método '.filter()': recibe un callback cuyo parametro es el elemento en cada iteración
            return tarea.estado == estado
        })
        return listaFiltrada
    },
    cambiarEstado:function(estado,nuevoEstado){
        let listaDeTareas = this.leerJSON(); //Ejecuto el metodo 'leerJSON' del 'moduloTareas'

        let Tarea = function(titulo,estado){ //Creo un constructor para para ser usado luego para crear tareas
            this.titulo = titulo, //Propiedad 'titulo' => parametro titulo
            this.estado = estado //Propiedad 'estado' => parametro estado
        }

        let listaModificada = listaDeTareas.map(function(tarea){ //Ejecuto método '.map()' a la lista de tareas, cuyo callback recibe como parámetro el elemento del array a iterar
            if(tarea.estado == estado){ //Estado del elemento coincide con el pasado por parametro de 'cambiarEstado'
                tarea.estado = nuevoEstado //cambio el estado por el que viene como parámetro 'nuevoEstado'
            }
            return new Tarea(tarea.titulo,tarea.estado) //Retorna un nuevo elemento usando para ello el constructor anteriormente creado para tal efecto, de manera que 'listaModificada' se va llenando no solo de los elementos modificados, sino tambien de los que no se modificaron.
        })
        let tareasActualizadas = JSON.stringify(listaModificada); //Convierto el array de objeto en formato json
        fs.writeFileSync(this.archivo, tareasActualizadas, 'utf-8') //Guardo el json en el archivo correspondiente pasando los argumentos que requier el método '.writeFileSync'
    }
}

module.exports = moduloTareas;