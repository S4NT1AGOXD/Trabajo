const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

const puerto = 8081

app.use(express.static('public'))

app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/', (req, res) => {
    res.render('home',
    {
        titulo:'Home',
        nombre: 'Santiago Giraldo'
    })
})

app.get('/producto', (req, res) => {
    res.render('productos',
    {
        Titulo: 'home',
        nombre: 'Aleja',
        rol1: 'Admin'
    })
})

app.listen(puerto, () => {
    console.log(`Escuchando por el puerto ${puerto}`)
})