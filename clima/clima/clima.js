const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=3816e039cb6f5b8aacd8ba7c02680bca`);

    if(resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ubicación`);
    }

    return resp.data.main.temp;

}

module.exports = {
    getClima
}
