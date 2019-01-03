const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv;

const command = argv._[0];

switch (command) {

    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ${archivo}!`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido!');

}
