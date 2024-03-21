const React = require('react')
const Layout = require('../Layout')
function DiscountPage({description_id,title}){
   
    return(
    <Layout title = {title}>
    <div>
    <div><img src = {description_id.img}/></div>
    <div>{description_id.description}</div>
    <button>Оплатить<a href= '/'></a></button>
    </div>
      </Layout>
    )
}
module.exports = DiscountPage