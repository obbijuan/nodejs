const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El email es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img:{
        type: String,
        required : false
    },
    rol: {
        type: String,
        default : 'USER_ROLE'
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('Usuario', usuarioSchema)
