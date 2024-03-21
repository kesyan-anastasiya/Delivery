const React = require('react')
const Layout = require('../Layout')
function MainPage({carts,title}){
   
    return(
        <Layout title ={title}>
<div>
    <div>
    {carts.map(cart=>(<div><img src = {cart.img}/>
    <div>{cart.name}</div>
    <div>{cart.price}</div>
    <div>{(cart.price -(cart.price / 100) * cart.discount)} </div> 
    <button><a>Описание заказа</a></button>
    <button>Выкупить<a href= '/'></a></button>
    </div>))}
    
    </div>
</div>
</Layout>
    )
}
module.exports = MainPage