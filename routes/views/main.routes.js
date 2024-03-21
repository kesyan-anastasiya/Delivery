const router = require('express').Router()
const MainPage = require('../../components/pages/MainPage')
const {Order}= require('../../db/models')


router.get('/', async (req,res)=>{
    try{
    const carts = await Order.findAll();
const html = res.renderComponent(MainPage,{carts,title : 'main'})
            res.send(html);
    }catch({message}){
        res.send(message)
    }
      })

// router.post('/', async (req, res) => {
//     try {

//     } catch ({ message }) {
//         res.json({ message })
//     }
// })

// router.put('/', async (req, res) => {
//     try {

//     } catch ({ message }) {
//         res.json({ message })
//     }
// })

router.delete('/:id', async (req, res) => {
    try {
const {id} = req.params
const data = await Order.destroy({where: { id }})
if(data){
    res.json({message: 'ok'})
}
    } catch ({ message }) {
        res.json({ message })
    }
})
module.exports = router;
