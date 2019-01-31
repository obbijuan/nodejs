const axios = require('axios');
const argv = require('./config/yargs').argv;

let encodeUrl = encodeURI(argv.direccion);
axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM`)
  .then( resp => {

      let location = resp.data.results[0];
      let coord = location.geometry.location;

      console.log('Direccion: ', location.formatted_address)
      console.log('Latitud: ', coord.lat)
      console.log('Longitud: ', coord.lng)
  })
  .catch( e => console.log('Error!', e));
