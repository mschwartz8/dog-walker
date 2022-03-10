const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'));
router.use('/findAWalk', require('./findAWalk'))
router.use('/owners', require('./owners'))
router.use('/dogs', require('./dogs'))
router.use('/walkers', require('./walker'))



router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
