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

router.post('/:id', async (req, res) => {
    try {
        const {id} = req.params
    const {name, price, discount, description } = req.body
   
   const result = await  Order.update({name, price, discount, description},{
    where:{id}
   
   }) 
   res.redirect('/')
    } catch (error) {
        
    }

    })

module.exports = router
