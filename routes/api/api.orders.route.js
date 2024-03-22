const router = require('express').Router()
const { Order } = require('../../db/models/')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    },
})
const upload = multer({ storage })

router.post('/', upload.single('img'), async (req, res) => {
    const { name, price, discount, districtId, description } = req.body
    console.log(req.body);
   const img = `/img/${req.file.originalname}`
    if (name.trim() === '') {
        res.json({ message: 'Вставьте изображение', error })
        return
    }

    try {
        const order = await Order.create({
            name,
            price,
            img,
            discount,
            districtId,
            description,
            userId: '1',
        })
        // еще надо нахуярить юзер айди и разобраться с дистриктом
        res.redirect('/')
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
