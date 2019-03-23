
const { io } = require('../server');

io.on('connection', (client)=>{
    console.log('Usuario Conectado')

    client.emit('enviarMensaje', {
        usuario: 'Aministrador',
        mensaje: 'Bienvenido a esta app'
    })

    client.on('disconnect', ()=>{
        console.log('Usuario Desconectado')
    })

    // Escuchar el cliente
    client.on('enviarMensaje', (mensaje, callback)=>{
        // console.log(mensaje)
        if (mensaje.usuario) {
            callback({
                resp: 'Todo salio OK'
            })
        }else {
            callback({
                resp: 'Todo Salio Mal!!!'
            })
        }
    })

})
