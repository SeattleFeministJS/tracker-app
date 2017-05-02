const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.json({
    title: 'Trackr App'
  })
})

// temp
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

router.route('/moods')
  .get((req, res) => {
    res.json(moods)
  })
  // .put()
  // .post()
  // .delete()



module.exports = router
