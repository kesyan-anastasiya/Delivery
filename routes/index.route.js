const router = require('express').Router()


const mainRouter = require('./views/main.routes')
const discountRouter = require('./views/descriptionPage')
const ordersRouter = require('./views/orders.routes')
const authRouter = require('./views/auth.routes')

const mainApiRouter = require('./api/api.main.route')
const orderApiRouter = require('./api/api.orders.route')
const apiAuthRouter = require('./api/api.auth.routes')
const FourZeroFour = require('../components/pages/FourZeroFour')


router.use('/', mainRouter)
router.use('/orders', ordersRouter)
router.use('/description', discountRouter)
router.use('/auth', authRouter)

router.use('/api/main', mainApiRouter)
router.use('/api/orders', orderApiRouter)
router.use('/description', discountRouter)
router.use('/api/auth', apiAuthRouter)

router.get('/*', async (req, res) => {
    try {
        const html = res.renderComponent(FourZeroFour, {
            title: 'NoMoney NoHoney',
        })
        res.send(html)
    } catch ({ message }) {
        res.send(message)
    }
})

module.exports = router
