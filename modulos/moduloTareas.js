let fs = require ('fs')

let moduloTareas = {
    traerArrayDeTareas: function (){
        let listaDeTareas = fs.readFileSync ('tareas.json', 'utf-8');
        return JSON.parse (listaDeTareas);
    },
    crearNuevaTarea: function (tarea){
        let listaParseada= this.traerArrayDeTareas ();
        listaParseada.push (tarea)
        let listaComoJSON = JSON.stringify (listaParseada);
        fs.writeFileSync ('tareas.json', listaComoJSON);
    },
    leerPorEstado: function (estado) {
        let estado = "terminada"
       let tareas = this.traerArrayDeTareas ();
       let estadoFiltrado = tareas.filter (function (estado){
           return estadoFiltrado;
       })
    }
}




module.exports=moduloTareas;