const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


let getInfo = async(direccion) => {

    try {

        let coord = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coord.lat, coord.lng);
        return `El clima en ${direccion} es de ${temp}º`;

    } catch (e) {
        return `No se pudo determinar el clima para ${direccion}`;
    }
}

getInfo(argv.direccion)
        .then( mensaje => console.log(mensaje))
        .catch( e => console.log(e))
