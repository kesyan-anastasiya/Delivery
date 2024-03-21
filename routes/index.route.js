const router = require('express').Router()
const usersRouter = require('./views/users.routes')
const mainRouter = require('./views/main.routes')
const discountRouter = require('./views/descriptionPage')
const ordersRouter = require('./views/orders.routes')
const mainApiRouter = require('./api/api.main.route')
const orderApiRouter = require('./api/api.orders.route')

router.use('/', mainRouter)
router.use('/orders', ordersRouter)
router.use('/users', usersRouter)
router.use('/api/main', mainApiRouter)
router.use('/api/orders', orderApiRouter)
router.use('/description', discountRouter)

module.exports = router
