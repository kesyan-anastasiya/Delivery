const router = require('express').Router()
const MainPage = require('../../components/pages/MainPage')
const СourierОrders = require('../../components/pages/СourierОrders')
const OrdersHistory = require('../../components/pages/OrdersHistory')

const { Order, District, Info } = require('../../db/models')

router.get('/', async (req, res) => {
    try {
        console.log(1234);
        const districts = await District.findAll()
        const carts = await Order.findAll()
        const html = res.renderComponent(MainPage, {
            districts,
            carts,
            title: 'main',
        })
        res.send(html)
    } catch ({ message }) {
        res.send(message)
    }
})

router.get('/my-orders', async (req, res) => {

    try {
        const carts = await Order.findAll({
            where: { userId: res.locals.user.id },
        })

        const html = res.renderComponent(СourierОrders, {
            carts,
            title: 'my-orders',
        })
        res.send(html)
    } catch ({ message }) {
        res.send(message)
    }
})

router.get('/history', async (req, res) => {
    try {
        const html = res.renderComponent(OrdersHistory, {
            title: 'history',
        })
        res.send(html)
    } catch ({ message }) {
        res.send(message)
    }
})


module.exports = router
