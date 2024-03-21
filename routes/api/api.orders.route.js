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
    const { name, price, discount, description } = req.body
    console.log(req.file);
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
            districtId: '1',
            description,
            userId: '1',
        })
        // еще надо нахуярить юзер айди и разобраться с дистриктом
        res.redirect('/')
    } catch ({ message }) {
        res.json({ message })
    }
})

module.exports = router
