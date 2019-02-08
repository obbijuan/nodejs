const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs')

app.get('/', (req, res) => {

  res.render('home', {
      nombre:   'Juan',
      anio  :   new Date().getFullYear()
  });

})

app.listen(8080, () => {
    console.log('Escuchando peticiones puerto 8080!')
})
