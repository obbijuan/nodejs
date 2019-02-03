const axios = require('axios');
const keys = require('./keys');


const getLugarLatLng = async (direccion) => {

    let key = keys.generateKey;
    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=${key}`)

    switch (resp.data.status) {

        case "OK":
            let location = resp.data.results[0];
            let coord = location.geometry.location;

            return {
                direccion: location.formatted_address,
                lat: coord.lat,
                lng: coord.lng
            }
        break;

        case 'ZERO_RESULTS':
            return new Error(`No hay resultados para la ciudad ${direccion}`);
            break;

        case 'OVER_QUERY_LIMIT':
            return new Error(`Ha superado las solicitudes diarias para google API!`);
            break;

        default:
            return resp.data.results[0];


    }

}


module.exports = {
    getLugarLatLng
}
