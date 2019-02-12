const express = require('express')
const router = express.Router()
const addPage = require('../views/addPage')
const Page = require('../models/Page')

router.get('/', (req, res, next) => {
  res.redirect('/')
})

router.get('/add', (req, res, next) => {
  res.send(addPage())
})

router.post('/', (req, res, next) => {
  Page.build({
    title: req.body.title,
    content: req.body.pageContent,
    status: req.body.status
  })
    .save(pages => pages.save())
    .then(() => res.redirect('/'))
    .catch(next)
})

module.exports = router
