const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLugarLatLng(argv.direccion)
//         .then(resp => {
//             console.log(resp);
//         })
//         .catch(e => console.log(e))


clima.getClima(-33.4488897, -70.6692655)
        .then(resp => {
            console.log(resp)
        })
        .catch( e => console.log(e))
