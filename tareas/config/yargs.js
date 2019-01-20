const descripcion = {
    demand:true,
    alias:'d'
}
const completado = {
    default:true,
    alias:'c',
    desc: 'Marca como completado o pendiente una tarea.'
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea',{
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea',{
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea',{
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}
