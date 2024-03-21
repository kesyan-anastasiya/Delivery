const router = require('express').Router()

const usersRouter = require('./views/users.routes')
const mainRouter = require('./views/main.routes')
const discountRouter = require('./views/descriptionPage')
const ordersRouter = require('./views/orders.routes')
const authRouter = require('./views/auth.routes')

const mainApiRouter = require('./api/api.main.route')
const orderApiRouter = require('./api/api.orders.route')
const apiAuthRouter = require('./api/api.auth.routes')


router.use('/', mainRouter)
router.use('/orders', ordersRouter)
router.use('/users', usersRouter)
router.use('/description', discountRouter)
router.use('/auth', authRouter)

router.use('/api/main', mainApiRouter)
router.use('/api/order', orderApiRouter)
router.use('/api/auth', apiAuthRouter)


module.exports = router;
