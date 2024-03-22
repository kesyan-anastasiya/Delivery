const router = require('express').Router()
const MainPage = require('../../components/pages/MainPage.jsx')
const СourierОrders = require('../../components/pages/СourierОrders.jsx')
const OrdersHistory = require('../../components/pages/OrdersHistory.jsx')

const { Order, District } = require('../../db/models')


router.get('/', async (req, res) => {
    try {
        console.log(1234);
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
