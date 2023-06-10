const mongoose = require('mongoose')
const database = require('../infra/database')

const userSchema = mongoose.Schema(
    { 
        name: {
            type: String,
            required: true
        }, 
        email: {
            type: String,
            required: true 
        },
        senha: {
            type: String,
            required: true
        },
        permissao: {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('User', userSchema)