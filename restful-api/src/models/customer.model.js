let mongoose = require('mongoose')

const server = 'ds045157.mlab.com:45157'
const database='restful-api'
const user='admin'
const password='admin123'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String, 
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)