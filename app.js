const express = require('express')
// const db = require('./dbConnection')

const app = express()

// const piadas = require('./mockup.js')


// // Rota Home
// app.get('./mockup.js', (req, res) => {
//     // Obtem 3 noticias
//     res.render('/app/views/index.ejs', {piadas: piadas.slice(0, 3)})
// })


// Rota piadas
app.get('./mockup.js', (req, res) => {
    res.render('./mockup.js', {piadas : piadas[id]})
})

// Configurações do Express
// ---------------------------------------------
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('./public'))

// Rotas
// ---------------------------------------------
app.get('/', (req, res) => {

  res.render('../app/views/index.ejs')

});

// Start Server
app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando com express')
  console.log('Pressione CTRL+C para encerrar')
});

