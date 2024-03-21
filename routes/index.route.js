const router = require('express').Router()
const usersRouter = require('./views/users.routes')
const mainRouter = require('./views/main.routes')
const ordersRouter = require('./views/orders.routes')
const mainApiRouter = require('./api/api.main.route')
const authRouter = require('./views/auth.routes')

router.use('/', mainRouter)
router.use('/orders', ordersRouter)
router.use('/users', usersRouter)
router.use('/api', mainApiRouter)
router.use('/auth', authRouter)



module.exports = router;
