const argv = require('yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear Nota!')
        break;
    case 'listar':
        console.log('Mostrar todas las Notas!')
        break;
    case 'actualizar':
        console.log('Actualiza una Nota!')
        break;
    default:
        console.log('Comando no reconocido!');

}
