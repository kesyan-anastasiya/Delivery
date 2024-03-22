const router = require('express').Router()
const MainPage = require('../../components/pages/MainPage')
const СourierОrders = require('../../components/pages/СourierОrders')
const OrdersHistory = require('../../components/pages/OrdersHistory')

const { Order, District } = require('../../db/models')


router.get('/', async (req, res) => {
    try {
        const districts = await District.findAll()
        const carts = await Order.findAll()
        const html = res.renderComponent(MainPage, {
            districts, carts,
            title: 'main',
        })
        res.send(html)
    } catch ({ message }) {
        res.send(message)
    }
})

router.get('/my-orders', async (req, res) => {
    try {
        const districts = await District.findAll()
        const carts = await Order.findAll()
        const html = res.renderComponent(СourierОrders, {
            districts,
            carts,
            title: 'main',
        })
        res.send(html)
    } catch ({ message }) {
        res.send(message)
    }
})

router.get('/history', async (req, res) => {
    try {
        const districts = await District.findAll()
        const carts = await Order.findAll()
        const html = res.renderComponent(OrdersHistory, {
            districts,
            carts,
            title: 'main',
        })
        res.send(html)
    } catch ({ message }) {
        res.send(message)
    }
})




module.exports = router
