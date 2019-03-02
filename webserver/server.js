const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'))

// Express hbs engine
hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs')


app.get('/', (req, res) => {
  res.render('home', {
      nombre: 'obbi juan'
  });
})

app.get('/about', (req, res) => {
  res.render('about', {nombre:'obbijuan'});
})

app.listen(8080, () => {
    console.log('Escuchando peticiones puerto 8080!')
})
