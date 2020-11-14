const mongoose = require('mongoose')
const Schema = mongoose.Schema


const GeoSchema = new Schema({
    type : {
        default: 'point',
        type : String
    },
    coordinates : {
        type : [Number],
        index : '2dsphere'
    }
})

const ninjaSchema = new Schema({
    name : {
        type : String,
        required : [
            true , 'Name field is required'
        ]
    },
    rank : {
        type : String,
    },
    available : {
        type : Boolean,
        default : false,
    },
    geometry : GeoSchema
})


const Ninja = mongoose.model('ninja',ninjaSchema)
module.exports = Ninja