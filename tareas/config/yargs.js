const argv = require('yargs')
    .command('crear', 'Crea una tarea',{
        descripcion : {
            demand:true,
            alias:'d'
        }
    })
    .command('actualizar', 'Actualiza una tarea',{
        descripcion : {
            demand:true,
            alias:'d'
        },
        completado : {
            default:true,
            alias:'c',
            desc: 'Marca como completado o pendiente una tarea.'
        }
    })
    .command('borrar', 'Borrar una tarea',{
        descripcion : {
            demand:true,
            alias:'d',
            desc: 'Marca como completado o pendiente una tarea.'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}
