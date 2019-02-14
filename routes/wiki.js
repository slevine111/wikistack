const express = require('express')
const router = express.Router()
const addPage = require('../views/addPage')
const wikipage = require('../views/wikipage')
const Page = require('../models/Page')

router.get('/add', (req, res, next) => {
  res.send(addPage())
})

router.get('/:slug', (req, res, next) => {
  Page.findOne({ where: { slug: req.params.slug } })
    .then(page => res.send(wikipage(page)))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Page.create({
    title: req.body.title,
    content: req.body.pageContent,
    status: req.body.status
  })
    .then(page => {
      res.redirect(`/wiki/${page.slug}`)
    })
    .catch(next)
})

module.exports = router
