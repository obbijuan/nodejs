const express = require('express')
const app = express()

app.get('/', (req, res) => {
  let salida = {
      nombre:   'Andres',
      edad  :   30,
      url   :   req.url
  }

  res.send(salida);

})

app.listen(3000, () => {
    console.log('Escuchando peticiones puerto 3000!')
})
