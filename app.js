const express = require('express')
const app = express()
const morgan = require('morgan')
const layout = require('./views/layout')
const wikiRoutes = require('./routes/wiki')
//const userRoutes = require('./routes/user')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('assets'))

app.use('/wiki', wikiRoutes)

app.get('/', (req, res) => {
  res.send(layout(''))
})

module.exports = app
