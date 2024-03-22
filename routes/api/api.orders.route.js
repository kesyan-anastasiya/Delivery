const router = require('express').Router()
const { Order, Info } = require('../../db/models/')
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


router.post('/buy/:id', async (req,res)=>{
   const {name, adress, comment, phone} = req.body
 try {
        const order = await Info.create({
            name,
            adress,
            comment,
            phone,
        })
        res.redirect('/')
    } catch ({ message }) {
        res.json({ message })
    }

})

router.post('/', upload.single('img'), async (req, res) => {
    const { name, price, discount, districtId, description } = req.body
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
            userId: res.locals.user.id,
        })
        res.redirect('/')
    } catch ({ message }) {
        res.json({ message })
    }
})

router.post('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { name, price, discount, description } = req.body

        const result = await Order.update(
            { name, price, discount, description },
            {
                where: { id },
            }
        )
        res.redirect('/')
    } catch (error) {}
})

module.exports = router
