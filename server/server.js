require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

app.use('/sensores', require('./routes/sensoresRoute'))

const PORT = Number(process.env.PORT) || 3000
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Rodando na porta: ${PORT}`) 
})