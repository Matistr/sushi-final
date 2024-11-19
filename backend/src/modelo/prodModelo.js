import mongoose from 'mongoose'

const productoSchema = new mongoose.Schema({
    titulo:{
        type:String,
        required:true
    },
    precio:{
        type: Number,
        required:true,
        min:0
    },
    stock:{
        type: Number,
        required:true,
        min:0
    },
    fecha:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
})

export default mongoose.model('producto',productoSchema)