// helpers
const hbs = require('hbs')

hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear();
})


hbs.registerHelper('capitalizar', (texto) => {

    if(texto.split(' ') ){
        let palabras = texto.split(' ') ? texto.split(' ') : texto.toUpperCase();
        palabras.forEach((palabra, idx)=>{
            palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        });
        return palabras.join(' ');
    }else{
        return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();

    }

})
