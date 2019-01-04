//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./procesos/procesos');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Mostrar todas las Tareas!')
        break;
    case 'actualizar':
        console.log('Actualiza una Tarea!')
        break;
    default:
        console.log('Comando no reconocido!');

}
