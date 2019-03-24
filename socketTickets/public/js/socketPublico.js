var socket = io();

socket.on('estadoActual', (res) => {
    actualizaHTML(res.ultimos4);
})

socket.on('ultimos4', (res) => {
    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();
    actualizaHTML(res.ultimos4);
})

function actualizaHTML(ultimos4){
    ultimos4.forEach((element, index) => {
        $(`#lblTicket${index+1}`).text("Ticket " + element.numero);
        $(`#lblEscritorio${index+1}`).text("Escritorio " + element.escritorio);
    });
}
