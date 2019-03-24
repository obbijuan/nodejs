const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();


io.on('connection', (client) => {

    client.on('siguienteTicket', (data, callback)=>{
        let siguiente = ticketControl.siguienteTicket();
        console.log(siguiente);
        callback(siguiente);
    })

    // Emite evento estadoActual
    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket()
    })

    client.on('atenderTicket', (data, callback)=>{
        if (!data.escritorio) {
            return callback({
                err:true,
                mensaje: 'El escritorio es necesario'
            });
        }
        // Devuelve el ticket a atender
        let atenderTicket = ticketControl.atenderTicket(data.escritorio);
        // Retorna el ticket
        callback(atenderTicket);
        // Actualizar o notificar los cambios en los ultimos 4


    })

});
