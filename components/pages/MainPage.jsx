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
    <button><a href= {`/description/${cart.id}`}>Описание заказа</a></button>
    <button>Выкупить</button>
    <button>Удалить</button>
    </div>))}
    
    </div>
</div>
</Layout>
    )
}
module.exports = MainPage