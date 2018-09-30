const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
require('./api/produto')(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(saudacao('Giselle'))

app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatorio: completo = ${req.query.completo}, ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function (parte) {
    //     corpo += parte
    // })

    // req.on('end', function () {
    //     res.send(corpo)
    // })
    res.send(req.body)
})

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado`)
})


app.use((req, res, next) => {  // middleware (next)
    console.log('será que serei chamado?')
    next()
})

app.get('/opa', (req, res) => {
    // res.send('estou bem!')
    res.json({
        data: [
            {id: 7, name: 'Mia', position: 1},
            {id: 34, name: 'Giselle', position: 2},
            {id: 75, name: 'Peri', position: 3}
        ],
        count: 30,
        skipe: 0,
        limit: 3,
        status: 200
    })
})

app.listen(3001, () => {
    console.log("server started")
})

