const express = require('express')
const app = express()
const hbs = require('hbs')

app.use(express.static(__dirname + '/public'))

// Express hbs engine
hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('home', {
      nombre:   'Obbijuan',
      anio  :   new Date().getFullYear()
  });

})

app.get('/about', (req, res) => {
  res.render('about', {
      anio  :   new Date().getFullYear()
  });

})

app.listen(8080, () => {
    console.log('Escuchando peticiones puerto 8080!')
})
