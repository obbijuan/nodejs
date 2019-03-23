var socket = io();
socket.on('connect', function(){
    console.log('Conectado al servidor');
})
// Escuchar
socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor')
})
// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'obbijuan',
    mensaje: 'Hola'
}, function(resp){
    console.log(resp)
})

// Escuchar informacion
socket.on('enviarMensaje', function(resp){
    console.log('Servidor:', resp)
})
