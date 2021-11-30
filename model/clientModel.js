const mongoose = require('mongoose')

// Estructura de datos de clientes
const clientSchema = new mongoose.Schema({
    name:{
        type        : String, 
        trim        : true,
        required: [true, 'What is your contact number?']
    },
    lastName:{
        type        : String, 
        required    : [true,'El campo lastName es obligatorio'],
        trim        : true
    },
    age:{
        type    : Number,
        min     : [18,'la edad debe ser mayor a 18'],
        max     : [99,'la edad debe ser menor a 99']
    },
    bornDate:{
        type    : Date
    }
},
{
    //Con estos campos permitimos que se pueda acceder a los datos de la estructura de datos
    // y que se pueda agregar campos nuevos cuando se hace una consulta
    toJSON  : { virtuals: true},
    toObject: { virtuals: true }
}
)

// Agregamos campos de solo lectura
clientSchema.virtual('datekill').get(function(){
    const currentDate = new Date().getFullYear()
    const averageLife = 70 
    const deathProbablyYear = currentDate + (averageLife - this.age)
    const month = new Date().getMonth()
    const day = new Date().getDate()
    return new Date(deathProbablyYear,month,day)
})

const Client = mongoose.model('Client',clientSchema)


module.exports = Client