const router = require('express').Router()
const {Order} = require('../../db/models')
const DiscountId = require('../../components/pages/DescriptionPage')

router.get('/:id',async (req,res)=>{
            try{
                const {id} = req.params
        const description_id = await Order.findOne({where:{id}});
            const html = res.renderComponent(DiscountId,{description_id ,title : 'main'})
                        res.send(html);
                }catch({message}){
                    res.send(message)
                }
    }
      )
  module.exports = router