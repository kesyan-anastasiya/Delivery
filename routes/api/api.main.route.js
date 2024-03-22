const router = require('express').Router()
const Cards = require('../../components/ui/Cards')
const { Order } = require('../../db/models')

// router.get('/', (req, res) => {
//     try {
//     } catch ({ message }) {
//         res.json({ message })
//     }
// })

router.post('/', async (req, res) => {
    const { districtId } = req.body
    try {
        const carts = await Order.findAll({ where: { districtId } })
        const html = res.renderComponent(Cards, { carts }, { doctype: false })
        res.status(200).json({ message: '+', html })
    } catch ({ message }) {
        res.json({ message })
    }
})

// router.put('/', async (req, res) => {
//     try {
//     } catch ({ message }) {
//         res.json({ message })
//     }
// })

router.delete('/', async (req, res) => {
    try {
    } catch ({ message }) {
        res.json({ message })
    }
})
module.exports = router
