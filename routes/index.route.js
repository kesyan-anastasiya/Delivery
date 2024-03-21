const router = require('express').Router()
// const usersRouter = require('./views/users.routes').Router()
const mainRouter = require('./views/main.routes')
// const ordersRouter = require('./views/orders.routes').Router()
// const mainApiRouter = require('./api/api.main.route')

router.use('/', mainRouter)
// router.use('/orders', ordersRouter)
// router.use('/users', usersRouter)
// router.use('/api', mainApiRouter)



module.exports = router;
