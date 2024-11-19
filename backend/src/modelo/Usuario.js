const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    correo:{
        type:String,
        unique:true,
        required:true
    },
    contraseña:{
        type:String,
        required:true
    },
    fecha:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Usuario', usuarioSchema);