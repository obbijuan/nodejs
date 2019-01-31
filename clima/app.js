const axios = require('axios');

const argv = require('yargs').options({
    direccion   :{
        alias   : 'd',
        desc    : 'Direccion de la ciudad para obtener el clima',
        demand  : true
    }
}).argv;

//console.log(argv.direccion);

encodedUrl = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDSPDpkFznGgzzBSsYvTq_sj0T0QCHRgwM`)
  .then( resp => {
      let location = JSON.stringify(resp.data.results[0], undefined, 2)
      console.log(location)
      console.log(location)
      console.log(location)
  })
  .catch( e => console.log('Error!', e));
