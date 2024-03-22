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
   let carts
    if (districtId === '30') {
        carts = await Order.findAll()
    } else {
        carts = await Order.findAll({ where: { districtId } })
    }
    try {
        const html = res.renderComponent(Cards, { carts }, { doctype: false })
        res.status(200).json({ message: '+', html })
    } catch ({ message }) {
        res.json({ message })
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = await Order.destroy({ where: { id,userId: res.locals.user.id } })
        if (data) {
            res.json({ message: 'ok' })
        }
    } catch ({ message }) {
        res.json({ message })
    }
})
module.exports = router
