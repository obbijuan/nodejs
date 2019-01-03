const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const command = argv._[0];

switch (command) {

    case 'listar':
        console.log(`Tabla del ${argv.base}!`.blue);
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: `.blue, colors.green(`${archivo}`)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido!');

}
