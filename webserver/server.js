const express = require('express')
const app = express()
const hbs = require('hbs')

app.use(express.static(__dirname + '/public'))

// Express hbs engine
hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs')

// helpers

hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear();
})

hbs.registerHelper('getName', ()=>{
    return "obbi juan";
})

hbs.registerHelper('capitalizar', (texto) => {
    
    if(texto){
        let palabras = texto.split(' ') ? texto.split(' ') : texto.toUpperCase();
        palabras.forEach((palabra, idx)=>{
            palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        });
        return palabras.join(' ');
    }
    
})

app.get('/', (req, res) => {
  res.render('home', {
      nombre:'obbijuan'
  });

})

app.get('/about', (req, res) => {
  res.render('about');
})

app.listen(8080, () => {
    console.log('Escuchando peticiones puerto 8080!')
})
