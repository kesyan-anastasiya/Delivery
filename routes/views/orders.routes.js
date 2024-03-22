const router = require('express').Router()
const CreateOrder = require('../../components/pages/CreateOrder')
const { District, Order } = require('../../db/models')
const UpdatePage = require('../../components/pages/UpdatePage')
const BuyPage = require('../../components/pages/BuyPage')

router.get('/', async (req, res) => {
    try {
        const districts = await District.findAll()
        const html = res.renderComponent(CreateOrder, {
            districts,
            title: 'Create new order',
        })
        res.status(200).send(html)
    } catch ({ message }) {
        res.status(500).json({ message })
    }
})

router.get('/buy/:id', async (req, res) => {
    try {
      const { id } = req.params
        const html = res.renderComponent(BuyPage, {
            title: 'main',
            id
        })
        res.send(html)
    } catch ({ message }) {
        res.send(message)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const order = await Order.findOne({ where: { id } })

        const html = res.renderComponent(UpdatePage, {
            title: 'Update order',
            order,
        })

        res.send(html)
    } catch ({ message }) {
        res.json({ message })
    }
})

router.post('/', async (req, res) => {
    try {
    } catch ({ message }) {
        res.json({ message })
    }
})

router.put('/', async (req, res) => {
    try {
    } catch ({ message }) {
        res.json({ message })
    }
})

router.delete('/', async (req, res) => {
    try {
    } catch ({ message }) {
        res.json({ message })
    }
})
module.exports = router
