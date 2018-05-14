const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (res, res) => {
    console.log(req.body)
    resp.send('<h1>Parabens</h1>')
})

app.post('/usuarios/:id', (res, res) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabens. Usuário alterado</h1>')
})

app.listen(3003)