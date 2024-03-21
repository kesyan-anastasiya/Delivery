const router = require('express').Router()
const {Order} = require ('../../db/models/')

router.post('/', async (req, res) => {
    try {
        const { name, price, img, discount, description } = req.body
        const order = await Order.create({
            name,
            price,
            img,
            discount,
            districtId:'1',
            description,
            userId: '1',
        })
        // еще надо нахуярить юзер айди и разобраться с дистриктом
        res.end()
    } catch ({ message }) {
        res.json({ message })
    }
})

module.exports = router
