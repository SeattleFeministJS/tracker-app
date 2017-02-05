const moodsRouter = require('express').Router()

const moods = [{
  name: 'happy',
  id: 0
},{
  name: 'sad',
  id: 1
},{
  name: 'bored',
  id: 2
}]

moodsRouter.route('/')
  .get((req, res) => {
    res.json(moods)
  })
  // .put()
  // .post()
  // .delete()

module.exports = moodsRouter
