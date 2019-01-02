const {crearArchivo} = require('./multiplicar/multiplicar')
const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', {
                                base : {
                                    demand  : true,
                                    alias   : 'b'
                                },
                                limite:{
                                    alias   : 'l',
                                    default : 10
                                }
                            }).help().argv;
const command = argv._[0];

switch (command) {

    case 'listar':
        console.log('Listar');

        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base)
            .then( archivo => console.log(`Archivo creado: ${archivo}!`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido!');

}
