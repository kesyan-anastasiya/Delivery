const router = require('express').Router()
const MainPage = require('../../components/pages/MainPage')
const {Order}= require('../../db/models')


router.get('/', async (req,res)=>{
    try{
    const cart = await Order.findAll();
const html = res.renderComponent(MainPage,{cart,title : 'main'})
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

// router.delete('/', async (req, res) => {
//     try {

//     } catch ({ message }) {
//         res.json({ message })
//     }
// })
module.exports = router;
