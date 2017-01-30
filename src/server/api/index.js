const apiRouter = require('express').Router()
const moodsRouter = require('./moods/moodsRoutes')

apiRouter.get('/', (req, res) => {
  res.sendStatus(404)
})

apiRouter.use('/moods', moodsRouter)

module.exports = apiRouter
