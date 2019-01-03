//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear Tarea!')
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
