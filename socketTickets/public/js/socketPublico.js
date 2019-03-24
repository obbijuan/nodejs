var socket = io();

socket.on('estadoActual', (res) => {
    res.ultimos4.forEach((element, index) => {
        $(`#lblTicket${index+1}`).text("Ticket " + element.numero);
        $(`#lblEscritorio${index+1}`).text("Escritorio " + element.escritorio);
    });
})
