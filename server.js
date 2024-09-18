const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const cervejaRoutes = require('./routes/cervejaria')

const app = express()
app.use(bodyParser.json())

app.use('/cerveja', cervejaRoutes)

app.listen(port, () => {
    console.log('Servidor rodando')
})